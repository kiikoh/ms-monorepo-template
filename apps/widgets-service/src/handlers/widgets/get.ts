import { widgetsApi } from "widgets-client";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const getWidget: ServerInferHandler<
  typeof widgetsApi.getWidget
> = async ({ params: { id } }) => {
  const widget = { id, title: `Hello ${id}`, body: "World" };

  console.log("Called GET widget", widget.id);

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: 200,
    body: widget ?? null,
  };
};
