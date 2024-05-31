import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface RegisterPetUseCaseRequest {
  name: string;
  race: string;
  characteristics: string;
  city: string;
  org_id: string;
}

interface RegisterPetUseCaseResponse {
  pet: Pet;
}

export class RegisterPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(data: RegisterPetUseCaseRequest) {
    return this.petsRepository.create({
      name: data.name,
      characteristics: data.characteristics,
      city: data.city,
      race: data.race,
      org_id: data.org_id,
    });
  }
}
