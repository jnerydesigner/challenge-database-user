import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";
import { CreateCategoryError } from "./CreateCategoryError";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }

  async execute({ name, description, slug }: ICreateCategoryDTO) {
    return await this.categoryRepository.store({
      description: description,
      name: name,
      slug: slug
    });
  }
}
