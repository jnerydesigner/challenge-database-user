import { getRepository, Repository, getCustomRepository } from "typeorm";

import { Product } from "../entities/Product";
import { GeneralProductError } from "../errors/GeneralProductError";
import { IProductDTO, IProductArrayDTO } from "../dto/ProductDTO";


import { IProductsRepository } from "./IProductsRepository";

export class ProductsRepository implements IProductsRepository {
  private product: Repository<Product>

  constructor() {
    this.product = getRepository(Product);
  }


  async index(): Promise<Product[] | IProductArrayDTO> {
    const products = await this.product.createQueryBuilder('products').take(5).getMany();

    const totalRecords = 10;
    const Product = products.map(product => {
      return {
        ...product
      }
    })

    const totalRegisters = {
      Product,
      totalRecords
    }

    console.log(totalRegisters)

    return totalRegisters;
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
