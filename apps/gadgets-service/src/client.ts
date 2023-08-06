import { initClient } from "@ts-rest/core";
import { contract } from "./contract";

// export a query client
export const gadgetsClient = initClient(contract, {
  baseUrl: "http://localhost:3001",
  baseHeaders: {
    "Content-Type": "application/json",
  },
});
