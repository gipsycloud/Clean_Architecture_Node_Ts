import { Customer } from "../entities/Customer.entitie";

export interface ICustomerRepository {
  create(data: Customer): Promise<Customer>
  getAllCustomer(): Promise<Customer[]>
}