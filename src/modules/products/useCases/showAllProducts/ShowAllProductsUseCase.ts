import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";


import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


@injectable()
export class ShowAllProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute() {
    return await this.productRepository.index();
  }
}
