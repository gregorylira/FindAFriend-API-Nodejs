import { Org, Prisma } from "@prisma/client";

export interface OrgsRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>;
  findOrgById(id: string): Promise<Org | null>;
  findOrgByEmail(email: string): Promise<Org | null>;
}
