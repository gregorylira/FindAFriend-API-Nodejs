import { makePetDetailsByIdUseCase } from "@/domain/factory/make-detail-by-id-use-case";
import { makeListPetByFiltersUseCase } from "@/domain/factory/make-list-by-filters-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function details(request: FastifyRequest, reply: FastifyReply) {
  const PetsDetailsByIdParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = PetsDetailsByIdParamsSchema.parse(request.params);
  console.log(id);
  try {
    const PetsDetailsByIdUseCase = makePetDetailsByIdUseCase();

    const pets = await PetsDetailsByIdUseCase.execute({
      petId: id,
    });
    return reply.status(200).send({ pets });
  } catch (error) {
    return reply.status(409).send({ message: error });
  }
}
