import { contract } from "../../contract";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const getWidget: ServerInferHandler<typeof contract.getWidget> = async ({
  params: { id },
}) => {
  const widget = { id, title: `Hello ${id}`, body: "World" };

  return {
    status: 200,
    body: widget ?? null,
  };
};
