import { contract } from "../../contract";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const createGadget: ServerInferHandler<
  typeof contract.createGadget
> = async ({ body }) => {
  const gadget = { id: "1", ...body };

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (gadget.title === "bad") {
    return {
      status: 400,
      body: {
        message: "Title cannot be 'bad'",
      },
    };
  }

  return {
    status: 201,
    body: gadget,
  };
};
