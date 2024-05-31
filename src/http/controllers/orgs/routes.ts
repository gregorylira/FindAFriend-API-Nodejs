import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { create } from "./create/create";
import { authenticate } from "./authenticate/authenticate";

export async function orgRoutes(app: FastifyInstance) {
  app.post("/session", authenticate);
  app.post("/org", create);
}
