import { contract } from "../../contract";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const getGadget: ServerInferHandler<typeof contract.getGadget> = async ({
  params: { id },
}) => {
  const widget = { id, title: `Hello ${id}`, body: "World" };

  return {
    status: 200,
    body: widget ?? null,
  };
};
