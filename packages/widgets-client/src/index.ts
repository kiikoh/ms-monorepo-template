import { initClient, initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const WidgetsSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const widgetsApi = c.router(
  {
    createWidget: {
      method: "POST",
      path: "/widgets",
      summary: "Create a widget",
      description: "Create a widget",
      responses: {
        201: WidgetsSchema,
        400: z.object({
          message: z.string(),
        }),
      },
      body: z.object({
        title: z.string(),
        body: z.string(),
      }),
    },
    getWidget: {
      method: "GET",
      path: `/widgets/:id`,
      summary: "Create a widget",
      description: "Get a widget by id",
      responses: {
        200: WidgetsSchema.nullable(),
      },
    },
  },
  {
    strictStatusCodes: true,
  }
);

export const widgetsClient = initClient(widgetsApi, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
  jsonQuery: true,
});
