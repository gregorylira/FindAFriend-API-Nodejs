import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";
import { env } from "./env";
import { orgRoutes } from "./http/controllers/orgs/routes";
import fastifyJwt from "@fastify/jwt";
import { petsRoutes } from "./http/controllers/pets/routes";

export const app = fastify();
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(orgRoutes);
app.register(petsRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation failed", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error" });
});
