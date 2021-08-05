import { Product } from "../entities/Product";
import { IProductDTO, IProductArrayDTO } from "../dto/ProductDTO";

export interface IProductsRepository {
  store: (data: IProductDTO) => Promise<Product>;
  index: () => Promise<Product[] | IProductArrayDTO>
  update: (id: number, data: IProductDTO) => Promise<Product>;
  delete: (id: number) => Promise<void>;
  show: (id: number) => Promise<Product>;
}
