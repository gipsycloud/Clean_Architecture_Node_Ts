import { Category } from "../../category/entities/Category.entitie";

export class Mobile {
  constructor(
    public readonly categoryId: number,
    public readonly modelName: string,
    public readonly brand: string,
    public readonly condition: string,
    public readonly price: string,
    public readonly storageCapacity: string | null,
    public readonly ram: string | null,
    public readonly color: string | null,
    public readonly description: string | null,
    public readonly imei: string,
    public readonly status: string,
    public readonly addedAt: Date,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly category?: Category
  ) { }
}