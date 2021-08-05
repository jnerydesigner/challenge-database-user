export interface IProductDTO {
  id?: number;
  name: string;
  perishableProduct: boolean;
  manufacturingDate: Date;
  expirationDate: Date;
  price: Number;
}

