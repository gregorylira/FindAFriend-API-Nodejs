import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface ListPetsByFiltersUseCaseRequest {
  city: string;
  characteristics?: string;
}

interface ListPetsByFiltersUseCaseResponse {
  pets: Pet[];
}

export class ListPetsByFiltersUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
    characteristics,
  }: ListPetsByFiltersUseCaseRequest): Promise<ListPetsByFiltersUseCaseResponse> {
    const pets = await this.petsRepository.listManyByFilters(
      city,
      characteristics
    );

    return { pets };
  }
}
