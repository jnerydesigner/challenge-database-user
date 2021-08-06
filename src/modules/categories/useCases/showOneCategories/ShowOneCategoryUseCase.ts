import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";
import { CreateCategoryError } from "../createCategory/CreateCategoryError";



@injectable()
export class ShowOneCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute(id: number) {
    const categoryExists = await this.categoryRepository.findByCategoryId(id);
    if (!categoryExists) {
      throw new CreateCategoryError.VerifyExistsCategory();
    }
    return await this.categoryRepository.show(id);
  }
}
