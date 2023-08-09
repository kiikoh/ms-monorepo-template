import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("combo", {
    description: "Generates a client to be used by other consumers",
    // gather information from the user
    prompts: [
      {
        type: "input",
        name: "resourceName",
        message: "What is the name of the resource?",
      },
      {
        type: "input",
        name: "portNumber",
        message: "What port number should the service run on?",
      },
    ],
    // perform actions based on the prompts
    actions: [
      // Server
      {
        type: "add",
        templateFile:
          "templates/client-service/service/src/handlers/resources/create.ts.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/src/handlers/{{ kebabCase resourceName }}s/create.ts",
      },
      {
        type: "add",
        templateFile:
          "templates/client-service/service/src/handlers/resources/get.ts.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/src/handlers/{{ kebabCase resourceName }}s/get.ts",
      },
      {
        type: "add",
        templateFile:
          "templates/client-service/service/src/handlers/resources/index.ts.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/src/handlers/{{ kebabCase resourceName }}s/index.ts",
      },
      {
        type: "add",
        templateFile:
          "templates/client-service/service/src/helpers/infer-handler.d.ts.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/src/helpers/infer-handler.d.ts",
      },
      {
        type: "add",
        templateFile: "templates/client-service/service/src/index.ts.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/src/index.ts",
      },
      {
        type: "add",
        templateFile: "templates/client-service/service/.eslintrc.js.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/.eslintrc.js",
      },
      {
        type: "add",
        templateFile: "templates/client-service/service/tsconfig.json.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/tsconfig.json",
      },
      {
        type: "add",
        templateFile: "templates/client-service/service/package.json.hbs",
        path: "apps/{{ kebabCase resourceName }}s-service/package.json",
      },
      // Do the client now
      {
        type: "add",
        templateFile: "templates/client-service/client/src/index.ts.hbs",
        path: "packages/{{ kebabCase resourceName }}s-client/src/index.ts",
      },
      {
        type: "add",
        templateFile: "templates/client-service/client/.eslintrc.js.hbs",
        path: "packages/{{ kebabCase resourceName }}s-client/.eslintrc.js",
      },
      {
        type: "add",
        templateFile: "templates/client-service/client/tsconfig.json.hbs",
        path: "packages/{{ kebabCase resourceName }}s-client/tsconfig.json",
      },
      {
        type: "add",
        templateFile: "templates/client-service/client/package.json.hbs",
        path: "packages/{{ kebabCase resourceName }}s-client/package.json",
      },
    ],
  });
}
