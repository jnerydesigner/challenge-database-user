import { inject, injectable } from "tsyringe";

import { ProductsRepository } from "../../../products/repositories/ProductsRepository";
import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { GeneralProductError } from "../../errors/GeneralProductError";

import { IProductDTO } from "../../dto/ProductDTO";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute({ name, manufacturingDate, expirationDate, perishableProduct, price, categoryId }: IProductDTO) {
    if (manufacturingDate.valueOf() > expirationDate.valueOf()) {
      throw new GeneralProductError.ManufacturingDateMustNotBeGreaterThanExpirationDate();
    }

    return await this.productRepository.store({
      name,
      manufacturingDate,
      expirationDate,
      perishableProduct,
      price,
      categoryId
    });
  }
}
