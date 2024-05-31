import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();

app.get("/", async (request, reply) => {
  const prisma = new PrismaClient();

  const org = await prisma.org.create({
    data: {
      id: "org_1",
      phone: "912392193",
      name: "Org 1",
      city: "New York",
      address: "123 Main St",
    },
  });

  const pet = await prisma.pet.create({
    data: {
      name: "Fluffy",
      race: "yellow",
      city: "New York",
      characteristics: "cute",
      org_id: "org_1",
    },
  });
  return reply.send(pet);
});

export { app };
