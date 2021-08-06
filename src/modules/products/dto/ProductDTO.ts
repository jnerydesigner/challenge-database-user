export interface IProductDTO {
  id?: number;
  name: string;
  perishableProduct: boolean;
  manufacturingDate: Date;
  expirationDate: Date;
  price: number;
  categoryId?: number;
}

export interface IProductArrayDTO {
  products: IProductDTO[];
  totalRecords?: number;
  totalRecordsPerPage?: number;
}

