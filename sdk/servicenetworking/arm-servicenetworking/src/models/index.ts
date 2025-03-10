/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The response of a TrafficController list operation. */
export interface TrafficControllerListResult {
  /** The TrafficController items on this page */
  value: TrafficController[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Resource ID definition used by parent to reference child resources. */
export interface ResourceID {
  /** Resource ID of child resource. */
  id: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The type used for update operations of the TrafficController. */
export interface TrafficControllerUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The updatable properties of the TrafficController. */
  properties?: Record<string, unknown>;
}

/** The response of a Traffic Controller Association list operation. */
export interface AssociationListResult {
  /** The Association items on this page */
  value: Association[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Association Subnet. */
export interface AssociationSubnet {
  /** Association ID. */
  id: string;
}

/** The type used for update operations of the Association. */
export interface AssociationUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The updatable properties of the Association. */
  properties?: AssociationUpdateProperties;
}

/** The updatable properties of the Association. */
export interface AssociationUpdateProperties {
  /** Association Type */
  associationType?: "subnets";
  /** Association Subnet */
  subnet?: AssociationSubnet;
}

/** The response of a Traffic Controller Frontend list operation. */
export interface FrontendListResult {
  /** The Frontend items on this page */
  value: Frontend[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Frontend IP Address. */
export interface FrontendPropertiesIPAddress {
  /** IP Address. */
  id: string;
}

/** The type used for update operations of the Frontend. */
export interface FrontendUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The updatable properties of the Frontend. */
  properties?: FrontendUpdateProperties;
}

/** The updatable properties of the Frontend. */
export interface FrontendUpdateProperties {
  /** Frontend Mode (Optional). */
  mode?: "public";
  /** Frontend IP Address Type (Optional). */
  ipAddressVersion?: FrontendIPAddressVersion;
  /** Frontend Public IP Address (Optional). */
  publicIPAddress?: FrontendPropertiesIPAddress;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface TrafficController extends TrackedResource {
  /**
   * Configuration Endpoints.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly configurationEndpoints?: string[];
  /**
   * Frontends References List
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly frontends?: ResourceID[];
  /**
   * Associations References List
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly associations?: ResourceID[];
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Association Subresource of Traffic Controller */
export interface Association extends TrackedResource {
  /** Association Type */
  associationType?: "subnets";
  /** Association Subnet */
  subnet?: AssociationSubnet;
  /**
   * Provisioning State
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Frontend Subresource of Traffic Controller. */
export interface Frontend extends TrackedResource {
  /** Frontend Mode (Optional). */
  mode?: "public";
  /** Frontend IP Address Version (Optional). */
  ipAddressVersion?: FrontendIPAddressVersion;
  /** Frontend Public IP Address (Optional). */
  publicIPAddress?: FrontendPropertiesIPAddress;
  /**
   * test doc
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Defines headers for TrafficControllerInterface_createOrUpdate operation. */
export interface TrafficControllerInterfaceCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for TrafficControllerInterface_delete operation. */
export interface TrafficControllerInterfaceDeleteHeaders {
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for AssociationsInterface_createOrUpdate operation. */
export interface AssociationsInterfaceCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for AssociationsInterface_delete operation. */
export interface AssociationsInterfaceDeleteHeaders {
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for FrontendsInterface_createOrUpdate operation. */
export interface FrontendsInterfaceCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for FrontendsInterface_delete operation. */
export interface FrontendsInterfaceDeleteHeaders {
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Accepted */
  Accepted = "Accepted"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Provisioning** \
 * **Updating** \
 * **Deleting** \
 * **Accepted**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;
/** Defines values for FrontendIPAddressVersion. */
export type FrontendIPAddressVersion = "IPv4" | "IPv6";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface TrafficControllerInterfaceListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type TrafficControllerInterfaceListBySubscriptionResponse = TrafficControllerListResult;

/** Optional parameters. */
export interface TrafficControllerInterfaceListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type TrafficControllerInterfaceListByResourceGroupResponse = TrafficControllerListResult;

/** Optional parameters. */
export interface TrafficControllerInterfaceGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TrafficControllerInterfaceGetResponse = TrafficController;

/** Optional parameters. */
export interface TrafficControllerInterfaceCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type TrafficControllerInterfaceCreateOrUpdateResponse = TrafficController;

/** Optional parameters. */
export interface TrafficControllerInterfaceUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type TrafficControllerInterfaceUpdateResponse = TrafficController;

/** Optional parameters. */
export interface TrafficControllerInterfaceDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface TrafficControllerInterfaceListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type TrafficControllerInterfaceListBySubscriptionNextResponse = TrafficControllerListResult;

/** Optional parameters. */
export interface TrafficControllerInterfaceListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type TrafficControllerInterfaceListByResourceGroupNextResponse = TrafficControllerListResult;

/** Optional parameters. */
export interface AssociationsInterfaceListByTrafficControllerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTrafficController operation. */
export type AssociationsInterfaceListByTrafficControllerResponse = AssociationListResult;

/** Optional parameters. */
export interface AssociationsInterfaceGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AssociationsInterfaceGetResponse = Association;

/** Optional parameters. */
export interface AssociationsInterfaceCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AssociationsInterfaceCreateOrUpdateResponse = Association;

/** Optional parameters. */
export interface AssociationsInterfaceUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type AssociationsInterfaceUpdateResponse = Association;

/** Optional parameters. */
export interface AssociationsInterfaceDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface AssociationsInterfaceListByTrafficControllerNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTrafficControllerNext operation. */
export type AssociationsInterfaceListByTrafficControllerNextResponse = AssociationListResult;

/** Optional parameters. */
export interface FrontendsInterfaceListByTrafficControllerOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTrafficController operation. */
export type FrontendsInterfaceListByTrafficControllerResponse = FrontendListResult;

/** Optional parameters. */
export interface FrontendsInterfaceGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FrontendsInterfaceGetResponse = Frontend;

/** Optional parameters. */
export interface FrontendsInterfaceCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type FrontendsInterfaceCreateOrUpdateResponse = Frontend;

/** Optional parameters. */
export interface FrontendsInterfaceUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type FrontendsInterfaceUpdateResponse = Frontend;

/** Optional parameters. */
export interface FrontendsInterfaceDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface FrontendsInterfaceListByTrafficControllerNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTrafficControllerNext operation. */
export type FrontendsInterfaceListByTrafficControllerNextResponse = FrontendListResult;

/** Optional parameters. */
export interface ServiceNetworkingManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
