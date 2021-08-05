import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";



@injectable()
export class ShowCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute() {
    return await this.categoryRepository.index();
  }
}
