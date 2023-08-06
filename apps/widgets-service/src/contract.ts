import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  createWidget: {
    method: "POST",
    path: "/widgets",
    summary: "Create a widget",
    description: "Create a widget",
    responses: {
      201: PostSchema,
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
      200: PostSchema.nullable(),
    },
  },
});
