import { Prisma, Pet } from "@prisma/client";

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  listManyByCity(city: string): Promise<Pet[]>;
  listManyByCharacteristics(caracteristics: string): Promise<Pet[]>;
}
