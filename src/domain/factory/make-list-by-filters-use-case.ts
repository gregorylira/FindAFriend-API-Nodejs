import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { ListPetsByFiltersUseCase } from "../case/list-by-filters/list-by-filters";

export function makeListPetByFiltersUseCase() {
  const petsRepository = new PrismaPetsRepository();
  return new ListPetsByFiltersUseCase(petsRepository);
}
