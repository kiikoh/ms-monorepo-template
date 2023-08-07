import { contract } from "../../contract";
import { ServerInferHandler } from "../../helpers/infer-handler";
import { gadgetsClient } from "gadgets-client";

export const createWidget: ServerInferHandler<
  typeof contract.createWidget
> = async ({ body }) => {
  const widget = { id: "1", ...body };

  const data = await gadgetsClient.createGadget({ body: widget });

  if (data.status === 400) {
    return {
      status: 400,
      body: data.body,
    };
  }

  console.log("Gadgets called successfully from widgets", data.body);

  return {
    status: 201,
    body: widget,
  };
};
