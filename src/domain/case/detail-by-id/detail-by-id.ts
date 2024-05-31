import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface DetailByIdUseCaseRequest {
  petId: string;
}

interface DetailByIdUseCaseResponse {
  pets: Pet[];
}

export class DetailByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    petId,
  }: DetailByIdUseCaseRequest): Promise<DetailByIdUseCaseResponse> {
    const pets = await this.petsRepository.detailById(petId);

    return { pets };
  }
}
