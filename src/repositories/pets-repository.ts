import { Prisma, Pet } from "@prisma/client";

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  listManyByFilters(city: string, characteristics?: string): Promise<Pet[]>;
  detailById(id: string): Promise<Pet | null>;
}
