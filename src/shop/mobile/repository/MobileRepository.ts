import { Condition, Status } from "@prisma/client";
import prisma from "../../../libs/prismaClient";
import { Mobile } from "../entities/Mobile.entitie";
import { IMobileRepository } from "../interfaces/IMobileRepository";

export class MobileRepository implements IMobileRepository {
  async getAllMobiles(): Promise<Mobile[]> {
    const mobiles = await prisma.mobile.findMany()
    console.log("Retrieved mobiles:", mobiles);

    return mobiles as Mobile[]
  }

  async create(data: Mobile): Promise<Mobile> {
    const mobile = await prisma.mobile.create({
      data: {
        categoryId: data.categoryId,
        modelName: data.modelName,
        brand: data.brand,
        condition: Condition[data.condition as keyof typeof Condition],
        price: data.price,
        storageCapacity: data.storageCapacity,
        ram: data.ram,
        color: data.color,
        description: data.description,
        imei: data.imei,
        status: Status[data.status as keyof typeof Status],
        addedAt: data.addedAt,
      }
    })
    return mobile;
  }
}