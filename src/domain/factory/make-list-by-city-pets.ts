import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { ListPetsByCityCase } from "../case/list-by-city-pets/list-by-city-pets";

export function makeListPetByCityUseCase() {
  const petsRepository = new PrismaPetsRepository();
  return new ListPetsByCityCase(petsRepository);
}
