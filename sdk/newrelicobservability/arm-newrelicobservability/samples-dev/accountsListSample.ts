/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NewRelicObservability } from "@azure/arm-newrelicobservability";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all the existing accounts
 *
 * @summary List all the existing accounts
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/preview/2022-07-01-preview/examples/Accounts_List_MaximumSet_Gen.json
 */
async function accountsListMaximumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "nqmcgifgaqlf";
  const userEmail = "ruxvg@xqkmdhrnoo.hlmbpm";
  const location = "egh";
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.accounts.list(userEmail, location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List all the existing accounts
 *
 * @summary List all the existing accounts
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/preview/2022-07-01-preview/examples/Accounts_List_MinimumSet_Gen.json
 */
async function accountsListMinimumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "nqmcgifgaqlf";
  const userEmail = "ruxvg@xqkmdhrnoo.hlmbpm";
  const location = "egh";
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.accounts.list(userEmail, location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  accountsListMaximumSetGen();
  accountsListMinimumSetGen();
}

main().catch(console.error);
