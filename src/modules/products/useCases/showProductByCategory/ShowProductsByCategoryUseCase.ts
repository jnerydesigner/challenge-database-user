import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";
import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";


import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { GeneralProductError } from "../../errors/GeneralProductError";


@injectable()
export class ShowProductsByCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository
  ) { }

  async execute(page: number, categoryId: number) {
    console.log(page, categoryId);
    const categoryExists = await this.productRepository.categoryIdProduct(categoryId);

    if (!categoryExists) {
      throw new GeneralProductError.ProductCategoriNotExist();
    }

    return await this.productRepository.filterByCategoryId(page, categoryId);
  }
}
