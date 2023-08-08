import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const GadgetSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const gadgetsApi = c.router(
  {
    createGadget: {
      method: "POST",
      path: "/gadgets",
      summary: "Create a gadget",
      description: "Create a gadget",
      responses: {
        201: GadgetSchema,
        400: z.object({
          message: z.string(),
        }),
      },
      body: z.object({
        title: z.string(),
        body: z.string(),
      }),
    },
    getGadget: {
      method: "GET",
      path: `/gadgets/:id`,
      summary: "Create a gadget",
      description: "Get a gadget by id",
      responses: {
        200: GadgetSchema.nullable(),
      },
    },
  },
  {
    strictStatusCodes: true,
  }
);
