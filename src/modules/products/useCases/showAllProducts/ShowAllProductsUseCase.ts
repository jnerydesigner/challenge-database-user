import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";


import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


@injectable()
export class ShowAllProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute(page: number) {
    return await this.productRepository.index(page);
  }
}
