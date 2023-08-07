import { initClient } from "@ts-rest/core";
import { contract } from ".";

export const gadgetsClient = initClient(contract, {
  baseUrl: "http://localhost:3001",
  baseHeaders: {},
});
