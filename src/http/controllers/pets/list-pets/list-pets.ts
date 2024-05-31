import { makeListPetByFiltersUseCase } from "@/domain/factory/make-list-by-filters-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function listPets(request: FastifyRequest, reply: FastifyReply) {
  const listPetsByFiltersQuerySchema = z.object({
    characteristics: z.string().optional(),
    city: z.string(),
  });

  const { city, characteristics } = listPetsByFiltersQuerySchema.parse(
    request.query
  );

  console.log(city, characteristics);
  try {
    const listPetsByFiltersUseCase = makeListPetByFiltersUseCase();

    const pets = await listPetsByFiltersUseCase.execute({
      city,
      characteristics: characteristics,
    });
    return reply.status(201).send({ pets });
  } catch (error) {
    return reply.status(409).send({ message: error });
  }
}
