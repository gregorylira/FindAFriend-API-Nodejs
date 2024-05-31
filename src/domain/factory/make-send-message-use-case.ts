import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { CreateOrgUseCase } from "../case/create-org/create-org";
import { SendMessageUseCase } from "../case/send-message/send-message";
import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";

export function makeSendMessageUseCase() {
  const orgsRepository = new PrismaOrgsRepository();
  const petsRepository = new PrismaPetsRepository();
  const createOrgUseCase = new SendMessageUseCase(
    petsRepository,
    orgsRepository
  );

  return createOrgUseCase;
}
