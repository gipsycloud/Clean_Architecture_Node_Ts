import prisma from "../../../libs/prismaClient";
import { Sale } from "../entities/Sale.entitie";
import { ISaleRepository } from "../interfaces/ISaleRepository";

export class SaleRepository implements ISaleRepository {
  async getAllSales(): Promise<Sale[]> {
    const sales = await prisma.sale.findMany({
      include: {
        customer: true,
        mobile: true,
      }
    });
    console.log("Retrieved sales:", sales);

    return sales as Sale[];

    // return sales.map(sale => ({
    //   id: sale.id,
    //   mobileId: sale.mobileId,
    //   customerId: sale.customerId,
    //   saleDate: sale.saleDate,
    //   salePrice: sale.salePrice,
    //   notes: sale.notes,
    //   createdAt: sale.createdAt,
    //   updatedAt: sale.updatedAt,
    //   customer: sale.customer,
    //   mobile: sale.mobile,
    // }));
  }

  async create(data: Sale): Promise<Sale> {
    const sale = await prisma.sale.create({
      data: {
        mobileId: data.mobileId,
        customerId: data.customerId,
        saleDate: data.saleDate,
        salePrice: data.salePrice,
        notes: data.notes,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
      include: {
        customer: true,
        mobile: true,
      },
    });
    return sale as Sale;
  }
}