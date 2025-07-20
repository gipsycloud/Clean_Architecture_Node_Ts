import prisma from "../../../libs/prismaClient";
import { Customer } from "../entities/Customer.entitie";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";

export class CustomerRepository implements ICustomerRepository {
  async getAllCustomer(): Promise<Customer[]> {
    const customers = await prisma.customer.findMany()
    return customers as Customer[]
  }

  async create(data: Customer): Promise<Customer> {
    const customer = await prisma.customer.create({
      data: {
        ...data
      }
    })
    return customer;
  }
}