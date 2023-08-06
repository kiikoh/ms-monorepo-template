import express from "express";
import { contract } from "./contract";
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { generateOpenApi } from "@ts-rest/open-api";
import { getGadget, createGadget } from "./handlers/gadgets";
import * as swaggerUi from "swagger-ui-express";

// Set up express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up Swagger UI
const openApiDocument = generateOpenApi(contract, {
  info: {
    title: "My Gadgets API",
    version: "1.0.0",
    description: "Manange your gadgets",
  },
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Handle requests
const s = initServer();
const router = s.router(contract, {
  getGadget,
  createGadget,
});

// Mount the routes
createExpressEndpoints(contract, router, app);

// Serve the contract
const server = app.listen(3001, () => {
  console.log(`Listening at http://localhost:${3001}`);
});
server.on("error", console.error);

export { gadgetsClient } from "./client";
