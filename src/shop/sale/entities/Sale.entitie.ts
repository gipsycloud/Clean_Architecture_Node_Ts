import { Customer } from "../../customer/entities/Customer.entitie";
import { Mobile } from "../../mobile/entities/Mobile.entitie";

export class Sale {
  constructor(
    public readonly mobileId: number,
    public readonly customerId: number,
    public readonly saleDate: Date | null,
    public readonly salePrice: string,
    public readonly notes: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly customer: Customer,
    public readonly mobile: Mobile
  ) { }
}