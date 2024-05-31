import { makeListPetByCityUseCase } from "@/domain/factory/make-list-by-city-pets";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function listByCity(request: FastifyRequest, reply: FastifyReply) {
  const listPetsByCityParamsSchema = z.object({
    city: z.string(),
  });

  console.log(request.params);
  const { city } = listPetsByCityParamsSchema.parse(request.params);

  try {
    const listPetsByCityUseCase = makeListPetByCityUseCase();

    const pets = await listPetsByCityUseCase.execute(city);
    return reply.status(201).send({ pets });
  } catch (error) {
    return reply.status(409).send({ message: error });
  }
}
