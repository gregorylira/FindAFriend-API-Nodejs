import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { DetailByIdUseCase } from "../case/detail-by-id/detail-by-id";

export function makePetDetailsByIdUseCase() {
  const petsRepository = new PrismaPetsRepository();
  return new DetailByIdUseCase(petsRepository);
}
