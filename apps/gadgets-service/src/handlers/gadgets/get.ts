import { contract } from "../../contract";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const getGadget: ServerInferHandler<typeof contract.getGadget> = async ({
  params: { id },
}) => {
  const widget = { id, title: `Hello ${id}`, body: "World" };

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: 200,
    body: widget ?? null,
  };
};
