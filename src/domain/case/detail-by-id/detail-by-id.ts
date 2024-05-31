import { PetNotFoundError } from "@/domain/error/pet-not-found";
import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface DetailByIdUseCaseRequest {
  petId: string;
}

interface DetailByIdUseCaseResponse {
  pet: Pet;
}

export class DetailByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    petId,
  }: DetailByIdUseCaseRequest): Promise<DetailByIdUseCaseResponse> {
    const pet = await this.petsRepository.detailById(petId);

    if (!pet) {
      throw new PetNotFoundError();
    }

    return { pet };
  }
}
