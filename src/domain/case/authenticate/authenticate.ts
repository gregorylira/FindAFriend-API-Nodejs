import { InvalidCredentialsError } from "@/domain/error/InvalidCredentialsError";
import { OrgsRepository } from "@/repositories/orgs-repository";
import { Org } from "@prisma/client";
import { compare } from "bcryptjs";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  org: Org;
}

export class AuthenticateUseCase {
  constructor(private OrgsRepository: OrgsRepository) {}

  async execute(
    data: AuthenticateUseCaseRequest
  ): Promise<AuthenticateUseCaseResponse> {
    const org = await this.OrgsRepository.findOrgByEmail(data.email);

    if (!org) {
      throw new InvalidCredentialsError();
    }

    const passwordMatches = await compare(data.password, org.password);

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    return { org };
  }
}
