export class Product {
  constructor(
    public rating: number,
    public id?: number,
    public title?: string,
    public price?: number,
    public description?: string,
    public categories?: string[]
  ) {}
}
