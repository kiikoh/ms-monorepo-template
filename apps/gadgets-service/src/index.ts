import express from "express";
import { gadgetsApi } from "gadgets-client";
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { generateOpenApi } from "@ts-rest/open-api";
import { getGadget, createGadget } from "./handlers/gadgets";
import * as swaggerUi from "swagger-ui-express";
import { AppRouter } from "@ts-rest/core";

// Set up express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up Swagger UI
const openApiDocument = generateOpenApi(
  gadgetsApi as AppRouter,
  {
    info: {
      title: "My Gadgets API",
      version: "1.0.0",
      description: "Manange your gadgets",
    },
  },
  { jsonQuery: true }
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Handle requests
const s = initServer();
const router = s.router(gadgetsApi, {
  createGadget,
  getGadget,
});

// Mount the routes
createExpressEndpoints(gadgetsApi, router, app, { jsonQuery: true });

// Serve the contract
const server = app.listen(3001, () => {
  console.log(`Listening at http://localhost:${3001}`);
});
server.on("error", console.error);
