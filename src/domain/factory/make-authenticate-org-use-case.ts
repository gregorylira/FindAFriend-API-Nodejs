import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { AuthenticateUseCase } from "../case/authenticate/authenticate";

export function makeAuthenticateOrgUseCase() {
  const orgsRepository = new PrismaOrgsRepository();
  return new AuthenticateUseCase(orgsRepository);
}
