import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { RegisterPetUseCase } from "../case/register-pet/register-pet";

export function makeRegisterPetsUseCase() {
  const petsRepository = new PrismaPetsRepository();
  return new RegisterPetUseCase(petsRepository);
}
