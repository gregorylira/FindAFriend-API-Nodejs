import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { create } from "./create/create";
import { authenticate } from "./authenticate/authenticate";
import { sendMessage } from "./send-message/send-message";

export async function orgRoutes(app: FastifyInstance) {
  app.post("/send-message", sendMessage);
  app.post("/session", authenticate);
  app.post("/org", create);
}
