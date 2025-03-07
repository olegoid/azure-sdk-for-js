/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AvailableProvidersListParameters,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to NOTE: This feature is currently in preview and still being tested for stability. Lists all available internet service providers for a specified Azure region.
 *
 * @summary NOTE: This feature is currently in preview and still being tested for stability. Lists all available internet service providers for a specified Azure region.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/NetworkWatcherAvailableProvidersListGet.json
 */
async function getAvailableProvidersList() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkWatcherName = "nw1";
  const parameters: AvailableProvidersListParameters = {
    azureLocations: ["West US"],
    city: "seattle",
    country: "United States",
    state: "washington"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkWatchers.beginListAvailableProvidersAndWait(
    resourceGroupName,
    networkWatcherName,
    parameters
  );
  console.log(result);
}

async function main() {
  getAvailableProvidersList();
}

main().catch(console.error);
