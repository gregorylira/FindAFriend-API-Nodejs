import { OrgAlreadyExistsError } from "@/domain/error/org-already-exists";
import { OrgsRepository } from "@/repositories/orgs-repository";
import { Org } from "@prisma/client";

interface CreateOrgUseCaseRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
}

interface CreateOrgUseCaseResponse {
  org: Org;
}

export class CreateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute(data: CreateOrgUseCaseRequest) {
    const orgAlreadyExists = await this.orgsRepository.findOrgByEmail(
      data.email
    );

    if (orgAlreadyExists) {
      throw new OrgAlreadyExistsError();
    }

    const org = await this.orgsRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      city: data.city,
    });

    return org;
  }
}
