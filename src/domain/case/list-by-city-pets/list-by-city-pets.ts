import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface ListPetsByCityCaseRequest {
  city: string;
}

interface ListPetsByCityCaseResponse {
  pets: Pet[];
}

export class ListPetsByCityCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(city: string): Promise<ListPetsByCityCaseResponse> {
    const pets = await this.petsRepository.listManyByCity(city);

    return { pets };
  }
}
