import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface ListPetsByEmailUseCaseRequest {
  city: string;
}

interface ListPetsByEmailUseCaseResponse {
  pets: Pet[];
}

export class ListPetsByEmailUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(city: string): Promise<ListPetsByEmailUseCaseResponse> {
    const pets = await this.petsRepository.listManyByCity(city);

    return { pets };
  }
}
