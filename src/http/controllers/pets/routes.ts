import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { register } from "./register/register";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { listByCity } from "./list-pets-by-city/list-pets-by-city";
import { listByCharacteristics } from "./list-pets-by-characteristics/list-pets-by-characteristics";

export async function petsRoutes(app: FastifyInstance) {
  app.get("/pet/:characteristics", listByCharacteristics);
  app.get("/pet/:city", listByCity);
  app.post("/pet", { onRequest: [verifyJwt] }, register);
}
