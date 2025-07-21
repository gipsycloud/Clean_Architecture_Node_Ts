import { inject, injectable } from "inversify";
import { ICustomerInterface } from "../interfaces/ICustomerInterface";
import { INTERFACE_TYPE } from "../utils/appConst";
import { CustomerRepository } from "../repository/CustomerRepository";

@injectable()
export class CustomerInteractor implements ICustomerInterface {
  constructor(
    @inject(INTERFACE_TYPE.CustomerRepository) private repository: CustomerRepository
  ) {
    this.repository = repository
  }
  getAllCustomer() {
    return this.repository.getAllCustomer()
  }
  onCreateCustomer(input: any) {
    return this.repository.create(input)
  }
}