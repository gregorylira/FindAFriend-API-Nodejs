import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepository {
  async listManyByFilters(city: string, caracteristics?: string) {
    const pets = await prisma.pet.findMany({
      where: {
        characteristics: caracteristics && { contains: caracteristics },
        city: {
          contains: city,
        },
      },
    });

    return pets;
  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({ data });

    return pet;
  }
}
