export interface IProductDTO {
  id?: number;
  name: string;
  perishableProduct: boolean;
  manufacturingDate: Date;
  expirationDate: Date;
  price: Number;
}

export interface IProductArrayDTO {
  Product: IProductDTO[];
  totalRecords?: number;
}

