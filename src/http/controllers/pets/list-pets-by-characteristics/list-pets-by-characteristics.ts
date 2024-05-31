import { makeListPetByCharacteristicsUseCase } from "@/domain/factory/make-list-by-characteristics";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function listByCharacteristics(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listPetsByCharacteristicsParamsSchema = z.object({
    characteristics: z.string(),
  });

  console.log(request.params);
  const { characteristics } = listPetsByCharacteristicsParamsSchema.parse(
    request.params
  );

  try {
    const listPetsBycharacteristicsUseCase =
      makeListPetByCharacteristicsUseCase();

    const pets = await listPetsBycharacteristicsUseCase.execute(
      characteristics
    );
    return reply.status(201).send({ pets });
  } catch (error) {
    return reply.status(409).send({ message: error });
  }
}
