import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";
import { env } from "./env";
import { orgRoutes } from "./http/controllers/orgs/routes";

export const app = fastify();

app.register(orgRoutes);

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
