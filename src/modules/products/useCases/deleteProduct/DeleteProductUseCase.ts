import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


import { IProductDTO } from "../../dto/ProductDTO";

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute(id: number) {
    return await this.productRepository.delete(id);
  }
}
