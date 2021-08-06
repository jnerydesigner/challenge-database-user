import { getRepository, Repository, getCustomRepository } from "typeorm";

import { Category } from "../entities/Category";
import { CreateCategoryError } from "../useCases/createCategory/CreateCategoryError";
import { ICreateCategoryDTO } from "../useCases/createCategory/ICreateCategoryDTO";


import { ICategoryRepository } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoryRepository {
  private category: Repository<Category>

  constructor() {
    this.category = getRepository(Category);
  }
  async index(): Promise<Category[]> {
    return this.category.find();
  }

  async show(id: number): Promise<Category> {
    return await this.category.findOneOrFail(id);
  }



  async findBySlugCategory(slug: string): Promise<Category | undefined> {
    const category = await this.category.findOne({ where: { slug: slug } });

    return category;
  }



  async store({
    name,
    description,
    slug
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.category.create({
      name,
      description,
      slug
    });

    return this.category.save(category);
  }

  async update(id: number, category: ICreateCategoryDTO): Promise<Category> {

    const categoryReceived = await this.category.findOne({ id });

    if (!categoryReceived) {
      throw new CreateCategoryError.VerifyExistsCategoryInDatBase();
    }
    await this.category.update(id, category);

    const verifyPosUpdate = await this.category.findOne({ id });


    if (!verifyPosUpdate) {
      throw new CreateCategoryError.VerifyExistsCategoryInDatBase();
    }


    return verifyPosUpdate;
  }

  async delete(id: number): Promise<void> {
    const categoryReceived = await this.category.findOne({ id });

    if (!categoryReceived) {
      throw new CreateCategoryError.VerifyExistsCategoryInDatBase();
    }

    await this.category.delete(id);
  }
}
