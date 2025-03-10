// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Deletes the blobs associated with a given manifest from the repository.
 */

import { ContainerRegistryContentClient, isOciImageManifest } from "@azure/container-registry";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // Get the service endpoint from the environment
  const endpoint = process.env.CONTAINER_REGISTRY_ENDPOINT || "<endpoint>";
  const repository = process.env.CONTAINER_REGISTRY_REPOSITORY || "library/hello-world";
  // Create a new ContainerRegistryClient
  const client = new ContainerRegistryContentClient(
    endpoint,
    repository,
    new DefaultAzureCredential()
  );

  const downloadResult = await client.getManifest("latest");

  if (!isOciImageManifest(downloadResult.manifest)) {
    throw new Error("Expected an OCI image manifest");
  }

  for (const layer of downloadResult.manifest.layers) {
    await client.deleteBlob(layer.digest);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
