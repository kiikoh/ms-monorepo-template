// import { gadgetsApi } from "gadgets-client";
import { widgetsApi } from "widgets-client";
import { ServerInferHandler } from "../../helpers/infer-handler";
// import { initClient } from "@ts-rest/core";

// const gadgetsClient = initClient(gadgetsApi, {
//   baseUrl: "http://localhost:3001",
//   baseHeaders: {},
//   jsonQuery: true,
// });

export const createWidget: ServerInferHandler<
  typeof widgetsApi.createWidget
> = async ({ body }) => {
  const widget = { id: "1", ...body };

  // simulate a db call
  await new Promise((resolve) => setTimeout(resolve, 500));
  // const data = await gadgetsClient.createGadget({ body: widget });

  // if (data.status === 400) {
  //   return {
  //     status: 400,
  //     body: data.body,
  //   };
  // }

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
