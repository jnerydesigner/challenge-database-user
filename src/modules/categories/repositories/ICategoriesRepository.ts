import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "../../categories/useCases/createCategory/ICreateCategoryDTO";

export interface ICategoryRepository {
  store: (data: ICreateCategoryDTO) => Promise<Category>;
  findBySlugCategory: (slug: string) => Promise<Category | undefined>;
  index: () => Promise<Category[]>
  update: (id: number, data: ICreateCategoryDTO) => Promise<Category>;
  delete: (id: number) => Promise<void>;
  show: (id: number) => Promise<Category>;

}
