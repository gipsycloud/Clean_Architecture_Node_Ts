export class Category {
  constructor(
    public readonly category_name: string,
    public readonly description: string | null,
    public readonly createdAt: Date
  ) { }
}