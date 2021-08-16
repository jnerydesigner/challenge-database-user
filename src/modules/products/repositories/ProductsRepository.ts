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

  async index(page: number = 1): Promise<Product[] | IProductArrayDTO> {
    const totalRecordsPerPage = 10;
    const totalRecords = await this.product.count();
    const totalPages = Math.round(totalRecords / totalRecordsPerPage);

    let currentPage = page === 1 ? 1 : page;

    if (currentPage > totalPages) {
      currentPage = totalPages;
    } else if (currentPage < 1) {
      currentPage = 1;
    }


    let begin = (totalRecordsPerPage * currentPage) - totalRecordsPerPage;

    if (begin < 1) {
      begin = 0
    }


    let products = await this.product.createQueryBuilder('products')
      .limit(totalRecordsPerPage)
      .orderBy("id")
      .offset(begin)
      .getMany();

    products = products.map(product => {
      return {
        ...product
      }
    })

    const totalRegisters = {
      products,
      totalRecords,
      totalRecordsPerPage,
      totalPages,
      currentPage
    }

    return totalRegisters;
  }

  async filterByCategoryId(page: number = 1, categoryId: number): Promise<Product[] | IProductArrayDTO> {
    const totalRecordsPerPage = 5;
    const totalRecords = await this.product.count({
      where: { categoryId: categoryId }
    });
    const totalPages = Math.round(totalRecords / totalRecordsPerPage);


    let currentPage = page === 1 ? 1 : page;

    if (currentPage > totalPages) {
      currentPage = totalPages;
    } else if (currentPage < 1) {
      currentPage = 1;
    }

    const beginAfter = (totalRecordsPerPage * currentPage) - totalRecordsPerPage;

    const begin = (beginAfter < 0) ? 0 : beginAfter;


    let products = await this.product.createQueryBuilder('products')
      .where("products.categoryId = :categoryId", { categoryId: categoryId })
      .limit(totalRecordsPerPage)
      .orderBy("id")
      .offset(begin)
      .getMany();

    products = products.map(product => {
      return {
        ...product
      }
    })

    const totalRegisters = {
      products,
      totalRecords,
      totalRecordsPerPage,
      totalPages,
      currentPage
    }

    return totalRegisters;
  }

  async show(id: number): Promise<Product> {
    try {
      const product = await this.product.findOneOrFail(id);
      return product;

    } catch (err) {
      throw new GeneralProductError.VerifyExixtentsProducts();
    }
  }


  async store({
    name,
    manufacturingDate,
    expirationDate,
    perishableProduct,
    price,
    categoryId
  }: IProductDTO): Promise<Product> {
    const product = this.product.create({
      name,
      manufacturingDate,
      expirationDate,
      perishableProduct,
      price,
      categoryId
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


  async categoryIdProduct(id: number): Promise<Product> {
    const product = await this.product.findOne({
      categoryId: id
    });
    if (!product) {
      throw new GeneralProductError.VerifyExixtentsProducts();
    }
    return product;
  }
}
