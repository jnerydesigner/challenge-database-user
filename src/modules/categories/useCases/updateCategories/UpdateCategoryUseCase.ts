import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";
import { ICreateCategoryDTO } from "../createCategory/ICreateCategoryDTO";



@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute(id: number, categoryUpdate: ICreateCategoryDTO) {
    return await this.categoryRepository.update(id, categoryUpdate);
  }
}
