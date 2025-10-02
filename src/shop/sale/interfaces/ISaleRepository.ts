import { Sale } from "../entities/Sale.entitie"

export interface ISaleRepository {
  getAllSales(): Promise<Sale[]>
  create(data: Sale): Promise<Sale>
}