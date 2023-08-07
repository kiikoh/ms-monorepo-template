import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("Generate client for microservice", {
    description: "Generates a client to be used by other consumers",
    // gather information from the user
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ],
    // perform actions based on the prompts
    actions: [],
  });
}
