export interface IProductDTO {
  id?: number;
  name: string;
  perishableProduct: boolean;
  manufacturingDate: Date;
  expirationDate: Date;
  price: Number;
  categoryId?: number;
  imageProduct?: string;
  driverImage?: string;
}

export interface IProductArrayDTO {
  products: IProductDTO[];
  totalRecords?: number;
  totalRecordsPerPage?: number;
}

