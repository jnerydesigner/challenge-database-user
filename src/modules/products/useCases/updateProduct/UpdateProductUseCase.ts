import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


import { IProductDTO } from "../../dto/ProductDTO";
import { GeneralProductError } from "../../errors/GeneralProductError";

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute(id: number, product: IProductDTO) {
    if (product.manufacturingDate.valueOf() > product.expirationDate.valueOf()) {
      throw new GeneralProductError.ManufacturingDateMustNotBeGreaterThanExpirationDate();
    }

    return await this.productRepository.update(id, product);
  }
}
