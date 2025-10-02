import { inject, injectable } from "inversify";
import { ISaleInterface } from "../interfaces/ISaleInterface";
import { ISaleRepository } from "../interfaces/ISaleRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class SaleInteractor implements ISaleInterface {
  constructor(
    @inject(INTERFACE_TYPE.SaleRepository) private repository: ISaleRepository
  ) {
    this.repository = repository
  }

  getAllSales() {
    return this.repository.getAllSales()
  }

  onCreateSale(input: any) {
    return this.repository.create(input)
  }
}