import { inject, injectable } from "tsyringe";
import slugName from 'slug';

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";
import { CreateCategoryError } from "./CreateCategoryError";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }

  async execute({ name, description }: ICreateCategoryDTO) {
    const slug: string = slugName(name);

    const verifyCategoryExists = await this.categoryRepository.findByCategorySlug(slug);
    console.log(verifyCategoryExists)

    if (verifyCategoryExists) {
      throw new CreateCategoryError.VerifyExistsCategoryTrue();
    }

    return await this.categoryRepository.store({
      description: description,
      name: name,
      slug: slug
    });
  }
}
