export interface IProductDTO {
  id?: number;
  name: string;
  perishableProduct: boolean;
  manufacturingDate: Date;
  expirationDate: Date;
  price: Number;
  categoryId?: number;
}

export interface IProductArrayDTO {
  products: IProductDTO[];
  totalRecords?: number;
  totalRecordsPerPage?: number;
}

