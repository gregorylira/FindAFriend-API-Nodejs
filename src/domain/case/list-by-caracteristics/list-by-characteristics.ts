import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface ListPetsByCharacteristicsCaseRequest {
  characteristics: string;
}

interface ListPetsByCharacteristicsCaseResponse {
  pets: Pet[];
}

export class ListPetsByCharacteristicsCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(
    characteristics: string
  ): Promise<ListPetsByCharacteristicsCaseResponse> {
    const pets = await this.petsRepository.listManyByCharacteristics(
      characteristics
    );

    return { pets };
  }
}
