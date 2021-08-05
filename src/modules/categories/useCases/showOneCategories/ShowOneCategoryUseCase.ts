import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";



@injectable()
export class ShowOneCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute(id: number) {
    return await this.categoryRepository.show(id);
  }
}
