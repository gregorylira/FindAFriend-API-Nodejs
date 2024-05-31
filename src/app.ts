import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";
import { env } from "./env";

const app = fastify();

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: "Validation error", errors: error.format() });
  }
  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  reply.status(500).send({ message: "Internal server error" });
});

export { app };
