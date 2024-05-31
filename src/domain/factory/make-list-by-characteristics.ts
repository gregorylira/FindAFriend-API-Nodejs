import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { ListPetsByCharacteristicsCase } from "../case/list-by-caracteristics/list-by-characteristics";

export function makeListPetByCharacteristicsUseCase() {
  const petsRepository = new PrismaPetsRepository();
  return new ListPetsByCharacteristicsCase(petsRepository);
}
