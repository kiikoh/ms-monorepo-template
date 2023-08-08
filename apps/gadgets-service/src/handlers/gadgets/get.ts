import { gadgetsApi } from "gadgets-client";
import { ServerInferHandler } from "../../helpers/infer-handler";
import { widgetsClient } from "widgets-client";

export const getGadget: ServerInferHandler<
  typeof gadgetsApi.getGadget
> = async ({ params: { id } }) => {
  const widget = { id: "4", title: `Hello ${id}`, body: "World" };

  const data = await widgetsClient.getWidget({ params: { id: "1" } });

  console.log("Widgets called successfully from gadgets", data.body);

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: 200,
    body: widget ?? null,
  };
};
