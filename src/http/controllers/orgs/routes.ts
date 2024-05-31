import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { create } from "./create/create";

export async function orgRoutes(app: FastifyInstance) {
  app.post("/org", create);
}
