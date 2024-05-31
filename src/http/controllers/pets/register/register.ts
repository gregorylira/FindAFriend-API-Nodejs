import { OrgAlreadyExistsError } from "@/domain/error/org-already-exists";
import { makeCreateOrgUseCase } from "@/domain/factory/make-create-org-use-case";
import { makeRegisterPetsUseCase } from "@/domain/factory/make-register-pet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const RegisterPetUseCaseBodySchema = z.object({
    name: z.string(),
    race: z.string(),
    characteristics: z.string(),
    city: z.string(),
  });

  const { name, race, characteristics, city } =
    RegisterPetUseCaseBodySchema.parse(request.body);

  try {
    const registerPetUseCase = makeRegisterPetsUseCase();

    const pet = await registerPetUseCase.execute({
      name,
      race,
      characteristics,
      city,
      org_id: request.user.sub,
    });
    return reply.status(201).send(pet);
  } catch (error) {
    if (error instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    }

    throw error;
  }
}
