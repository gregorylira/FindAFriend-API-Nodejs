import { OrgNotFoundError } from "@/domain/error/org-not-found";
import { PetNotFoundError } from "@/domain/error/pet-not-found";
import { OrgsRepository } from "@/repositories/orgs-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { prepareMessageWhatsapp } from "@/utils/prepare-message";

interface SendMessageUseCaseRequest {
  petId: string;
}

interface SendMessageUseCaseResponse {
  message: string;
}

export class SendMessageUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private orgsRepository: OrgsRepository
  ) {}

  async execute({
    petId,
  }: SendMessageUseCaseRequest): Promise<SendMessageUseCaseResponse> {
    const pet = await this.petsRepository.detailById(petId);
    if (!pet) {
      throw new PetNotFoundError();
    }
    const org = await this.orgsRepository.findOrgById(pet.org_id);

    if (!pet || !org) {
      throw new OrgNotFoundError();
    }

    const message = prepareMessageWhatsapp({
      phone: org.phone,
      message: `Olá, gostaria de saber mais sobre o ${pet.name}`,
    });

    return { message };
  }
}
