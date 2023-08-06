import type {
  ServerInferRequest,
  ServerInferResponses,
  AppRoute,
} from "@ts-rest/core";

export type ServerInferHandler<T extends AppRoute> = (
  req: ServerInferRequest<T>
) => Promise<ServerInferResponses<T>>;
