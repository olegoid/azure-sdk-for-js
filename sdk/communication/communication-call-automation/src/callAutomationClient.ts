// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { KeyCredential, TokenCredential, isTokenCredential } from "@azure/core-auth";
import { CommonClientOptions } from "@azure/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import {
  parseClientArguments,
  isKeyCredential,
  createCommunicationAuthPolicy,
  CommunicationIdentifier,
  CommunicationUserIdentifier,
} from "@azure/communication-common";
import { logger } from "./models/logger";
import { SDK_VERSION } from "./models/constants";
import {
  AnswerCallRequest,
  CallAutomationApiClient,
  CommunicationIdentifierModel,
  CreateCallRequest,
  RedirectCallRequest,
  RejectCallRequest,
} from "./generated/src";
import { CallConnection } from "./callConnection";
import { CallRecording } from "./callRecording";
import {
  AnswerCallOptions,
  CreateCallOptions,
  RedirectCallOptions,
  RejectCallOptions,
} from "./models/options";
import { AnswerCallResult, CreateCallResult } from "./models/responses";
import { CallConnectionProperties, CallInvite } from "./models/models";
import {
  communicationIdentifierConverter,
  communicationIdentifierModelConverter,
  phoneNumberIdentifierConverter,
  PhoneNumberIdentifierModelConverter,
} from "./utli/converters";
import { v4 as uuidv4 } from "uuid";

/**
 * Client options used to configure CallAutomation Client API requests.
 */
export interface CallAutomationClientOptions extends CommonClientOptions {
  /**
   * The identifier of the source of the call for call creating/answering/inviting operation.
   */
  sourceIdentity?: CommunicationUserIdentifier;
}

/**
 * Checks whether the type of a value is CallAutomationClientOptions or not.
 *
 * @param options - The value being checked.
 */
const isCallAutomationClientOptions = (options: any): options is CallAutomationClientOptions =>
  !!options && !isTokenCredential(options) && !isKeyCredential(options);

/**
 * A CallAutomationClient represents a Client to the Azure Communication CallAutomation service.
 */
export class CallAutomationClient {
  private readonly callAutomationApiClient: CallAutomationApiClient;
  private readonly sourceIdentity?: CommunicationIdentifierModel;
  private readonly credential: TokenCredential | KeyCredential;
  private readonly internalPipelineOptions: InternalPipelineOptions;
  /**
   * Initializes a new instance of the CallAutomationClient class.
   * @param connectionString - Connection string to connect to an Azure Communication Service resource.
   *                         Example: "endpoint=https://contoso.eastus.communications.azure.net/;accesskey=secret";
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(connectionString: string, options?: CallAutomationClientOptions);

  /**
   * Initializes a new instance of the CallAutomationClient class using a TokenCredential or KeyCredential.
   * @param endpoint - The endpoint of the service (ex: https://contoso.eastus.communications.azure.net).
   * @param credential - TokenCredential or KeyCredential that is used to authenticate requests to the service.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  constructor(
    endpoint: string,
    credential: TokenCredential | KeyCredential,
    options?: CallAutomationClientOptions
  );

  constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: KeyCredential | TokenCredential | CallAutomationClientOptions,
    maybeOptions: CallAutomationClientOptions = {}
  ) {
    const options = isCallAutomationClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;
    const libInfo = `azsdk-js-communication-call-automation/${SDK_VERSION}`;

    if (!options?.userAgentOptions) {
      options.userAgentOptions = {};
    }

    if (options?.userAgentOptions?.userAgentPrefix) {
      options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
    } else {
      options.userAgentOptions.userAgentPrefix = libInfo;
    }

    this.internalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info,
        },
      },
    };

    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const authPolicy = createCommunicationAuthPolicy(credential);

    this.credential = credential;
    this.callAutomationApiClient = new CallAutomationApiClient(url, this.internalPipelineOptions);
    this.callAutomationApiClient.pipeline.addPolicy(authPolicy);
    this.sourceIdentity = options.sourceIdentity
      ? communicationIdentifierModelConverter(options.sourceIdentity)
      : undefined;
  }

  /**
   * Initializes a new instance of CallConnection.
   * @param callConnectionId - The CallConnection id for the CallConnection instance. (ex: 421CONTOSO-cRD6-4RDc-a078-99dRANDOMf).
   */
  public getCallConnection(callConnectionId: string): CallConnection {
    return new CallConnection(
      callConnectionId,
      this.callAutomationApiClient.endpoint,
      this.credential,
      this.internalPipelineOptions
    );
  }

  /**
   * Initializes a new instance of CallRecording.
   */
  public getCallRecording(): CallRecording {
    return new CallRecording(
      this.callAutomationApiClient.endpoint,
      this.credential,
      this.internalPipelineOptions
    );
  }

  /**
   * Get Source Identity that is used for create and answer call
   */
  public getSourceIdentity(): CommunicationUserIdentifier | undefined {
    return this.sourceIdentity
      ? (communicationIdentifierConverter(this.sourceIdentity) as CommunicationUserIdentifier)
      : undefined;
  }

  private async createCallInternal(
    request: CreateCallRequest,
    options?: CreateCallOptions
  ): Promise<CreateCallResult> {
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date().toUTCString(),
      repeatabilityRequestID: uuidv4(),
    };
    const result = await this.callAutomationApiClient.createCall(request, optionsInternal);

    if (result?.callConnectionId) {
      const callConnectionPropertiesDto: CallConnectionProperties = {
        ...result,
        sourceIdentity: result.sourceIdentity
          ? communicationIdentifierConverter(result.sourceIdentity)
          : undefined,
        targetParticipants: result.targets?.map((returnedTarget) =>
          communicationIdentifierConverter(returnedTarget)
        ),
        sourceCallerIdNumber: result.sourceCallerIdNumber
          ? phoneNumberIdentifierConverter(result.sourceCallerIdNumber)
          : undefined,
      };
      const callConnection = new CallConnection(
        result.callConnectionId,
        this.callAutomationApiClient.endpoint,
        this.credential,
        this.internalPipelineOptions
      );
      const createCallResult: CreateCallResult = {
        callConnectionProperties: callConnectionPropertiesDto,
        callConnection: callConnection,
      };
      return createCallResult;
    }
    throw "callConnectionProperties / callConnectionId is missing in createCall result";
  }

  /**
   * Create an outgoing call from source to a target identity.
   * @param targetParticipant - A single target.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains createCallConnection api options.
   */
  public async createCall(
    targetParticipant: CallInvite,
    callbackUrl: string,
    options: CreateCallOptions = {}
  ): Promise<CreateCallResult> {
    const request: CreateCallRequest = {
      sourceIdentity: this.sourceIdentity,
      targets: [communicationIdentifierModelConverter(targetParticipant.targetParticipant)],
      callbackUri: callbackUrl,
      operationContext: options.operationContext,
      azureCognitiveServicesEndpointUrl: options.azureCognitiveServicesEndpointUrl,
      mediaStreamingConfiguration: options.mediaStreamingConfiguration,
      customContext: {
        sipHeaders: targetParticipant.sipHeaders,
        voipHeaders: targetParticipant.voipHeaders,
      },
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(
        targetParticipant.sourceCallIdNumber
      ),
      sourceDisplayName: targetParticipant.sourceDisplayName,
    };

    return this.createCallInternal(request, options);
  }

  /**
   * Create an outgoing call from source to a group of targets identities.
   * @param targetParticipants - A group of targets identities.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains createCallConnection api options.
   */
  public async createGroupCall(
    targetParticipants: CommunicationIdentifier[],
    callbackUrl: string,
    options: CreateCallOptions = {}
  ): Promise<CreateCallResult> {
    const request: CreateCallRequest = {
      sourceIdentity: this.sourceIdentity,
      targets: targetParticipants.map((target) => communicationIdentifierModelConverter(target)),
      callbackUri: callbackUrl,
      operationContext: options.operationContext,
      azureCognitiveServicesEndpointUrl: options.azureCognitiveServicesEndpointUrl,
      mediaStreamingConfiguration: options.mediaStreamingConfiguration,
      customContext: {
        sipHeaders: options.sipHeaders,
        voipHeaders: options.voipHeaders,
      },
      sourceCallerIdNumber: PhoneNumberIdentifierModelConverter(options.sourceCallIdNumber),
      sourceDisplayName: options.sourceDisplayName,
    };

    return this.createCallInternal(request, options);
  }

  /**
   * Answer the call.
   * @param incomingCallContext - The context associated with the call.
   * @param callbackUrl - The callback url.
   * @param options - Additional request options contains answerCall api options.
   */
  public async answerCall(
    incomingCallContext: string,
    callbackUrl: string,
    options: AnswerCallOptions = {}
  ): Promise<AnswerCallResult> {
    const request: AnswerCallRequest = {
      incomingCallContext: incomingCallContext,
      callbackUri: callbackUrl,
      mediaStreamingConfiguration: options.mediaStreamingConfiguration,
      azureCognitiveServicesEndpointUrl: options.azureCognitiveServicesEndpointUrl,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date().toUTCString(),
      repeatabilityRequestID: uuidv4(),
    };
    const result = await this.callAutomationApiClient.answerCall(request, optionsInternal);

    if (result?.callConnectionId) {
      const callConnectionProperties: CallConnectionProperties = {
        ...result,
        sourceIdentity: result.sourceIdentity
          ? communicationIdentifierConverter(result.sourceIdentity)
          : undefined,
        targetParticipants: result.targets?.map((target) =>
          communicationIdentifierConverter(target)
        ),
        sourceCallerIdNumber: result.sourceCallerIdNumber
          ? phoneNumberIdentifierConverter(result.sourceCallerIdNumber)
          : undefined,
      };
      const callConnection = new CallConnection(
        result.callConnectionId,
        this.callAutomationApiClient.endpoint,
        this.credential,
        this.internalPipelineOptions
      );
      const answerCallResult: AnswerCallResult = {
        callConnectionProperties: callConnectionProperties,
        callConnection: callConnection,
      };
      return answerCallResult;
    }
    throw "callConnectionProperties / callConnectionId is missing in createCall result";
  }

  /**
   * Redirect the call.
   *
   * @param incomingCallContext - The context associated with the call.
   * @param targetParticipant - The target identity to redirect the call to.
   * @param options - Additional request options contains redirectCall api options.
   */
  public async redirectCall(
    incomingCallContext: string,
    targetParticipant: CallInvite,
    options: RedirectCallOptions = {}
  ): Promise<void> {
    const request: RedirectCallRequest = {
      incomingCallContext: incomingCallContext,
      target: communicationIdentifierModelConverter(targetParticipant.targetParticipant),
      customContext: {
        sipHeaders: targetParticipant.sipHeaders ?? options.sipHeaders ?? undefined,
        voipHeaders: targetParticipant.voipHeaders ?? options.voipHeaders ?? undefined,
      },
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date().toUTCString(),
      repeatabilityRequestID: uuidv4(),
    };

    return this.callAutomationApiClient.redirectCall(request, optionsInternal);
  }

  /**
   * Reject the call.
   *
   * @param incomingCallContext - The context associated with the call.
   * @param options - Additional request options contains rejectCall api options.
   */
  public async rejectCall(
    incomingCallContext: string,
    options: RejectCallOptions = {}
  ): Promise<void> {
    const request: RejectCallRequest = {
      incomingCallContext: incomingCallContext,
      callRejectReason: options.callRejectReason,
    };
    const optionsInternal = {
      ...options,
      repeatabilityFirstSent: new Date().toUTCString(),
      repeatabilityRequestID: uuidv4(),
    };

    return this.callAutomationApiClient.rejectCall(request, optionsInternal);
  }
}
