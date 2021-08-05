import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../../products/repositories/IProductsRepository";



@injectable()
export class ShowOneProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }


  async execute(id: number) {
    return await this.productRepository.show(id);
  }
}
