import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";


import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


@injectable()
export class ShowProductsByCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute(page: number, categoryId: number) {
    return await this.productRepository.filterByCategoryId(page, categoryId);
  }
}
