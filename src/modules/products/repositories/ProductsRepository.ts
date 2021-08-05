import { getRepository, Repository, getCustomRepository } from "typeorm";

import { Product } from "../entities/Product";
import { GeneralProductError } from "../errors/GeneralProductError";
import { IProductDTO } from "../dto/ProductDTO";


import { IProductsRepository } from "./IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private product: Repository<Product>

  constructor() {
    this.product = getRepository(Product);
  }


  async index(): Promise<Product[]> {
    return this.product.find();
  }

  async show(id: number): Promise<Product> {
    return await this.product.findOneOrFail(id);
  }

  async store({
    name,
    manufacturingDate,
    expirationDate,
    perishableProduct,
    price,
  }: IProductDTO): Promise<Product> {
    const product = this.product.create({
      name,
      manufacturingDate,
      expirationDate,
      perishableProduct,
      price
    });

    return this.product.save(product);
  }

  async update(id: number, product: IProductDTO): Promise<Product> {

    const productReceived = await this.product.findOne({ id });

    if (!productReceived) {
      throw new GeneralProductError.VerifyExixtentsProducts();
    }
    await this.product.update(id, product);

    const verifyPosUpdate = await this.product.findOne({ id });


    if (!verifyPosUpdate) {
      throw new GeneralProductError.VerifyExixtentsProducts();
    }


    return verifyPosUpdate;
  }

  async delete(id: number): Promise<void> {
    const productReceived = await this.product.findOne({ id });

    if (!productReceived) {
      throw new GeneralProductError.VerifyExixtentsProducts();
    }

    await this.product.delete(id);
  }
}
