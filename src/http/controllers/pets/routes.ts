import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { register } from "./register/register";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { listPets } from "./list-pets/list-pets";
import { details } from "./detail-by-id/detail-by-id";

export async function petsRoutes(app: FastifyInstance) {
  app.get("/pet/:id", details);
  app.get("/pet", listPets);
  app.post("/pet", { onRequest: [verifyJwt] }, register);
}
