import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepository {
  async listManyByCharacteristics(caracteristics: string) {
    const pets = await prisma.pet.findMany({
      where: {
        characteristics: {
          contains: caracteristics,
        },
      },
    });

    return pets;
  }
  async listManyByCity(city: string) {
    const pets = await prisma.pet.findMany({
      where: {
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
