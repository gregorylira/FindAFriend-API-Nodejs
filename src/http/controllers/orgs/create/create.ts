import { OrgAlreadyExistsError } from "@/domain/error/org-already-exists";
import { makeCreateOrgUseCase } from "@/domain/factory/make-create-org-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createOrgBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    city: z.string(),
  });

  const { name, email, password, phone, city } = createOrgBodySchema.parse(
    request.body
  );

  try {
    const createOrgUseCase = makeCreateOrgUseCase();

    const org = await createOrgUseCase.execute({
      name,
      email,
      password,
      phone,
      city,
    });
  } catch (error) {
    if (error instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
}
