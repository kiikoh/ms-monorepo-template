import { widgetsApi } from "widgets-client";
import { ServerInferHandler } from "../../helpers/infer-handler";

export const createWidget: ServerInferHandler<
  typeof widgetsApi.createWidget
> = async ({ body }) => {
  const widget = { id: "1", ...body };

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (widget.title === "bad") {
    return {
      status: 400,
      body: {
        message: "Title cannot be 'bad'",
      },
    };
  }

  // console.log("Gadgets called successfully from widgets", data.body);

  return {
    status: 201,
    body: widget,
  };
};
