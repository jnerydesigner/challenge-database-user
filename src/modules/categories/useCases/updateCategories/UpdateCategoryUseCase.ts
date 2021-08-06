import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";
import { CreateCategoryError } from "../createCategory/CreateCategoryError";
import { ICreateCategoryDTO } from "../createCategory/ICreateCategoryDTO";



@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute(id: number, categoryUpdate: ICreateCategoryDTO) {
    const categoryExists = await this.categoryRepository.findByCategoryId(id);
    if (!categoryExists) {
      throw new CreateCategoryError.VerifyExistsCategory();
    }
    return await this.categoryRepository.update(id, categoryUpdate);
  }
}
