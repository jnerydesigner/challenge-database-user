import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../../categories/repositories/ICategoriesRepository";



@injectable()
export class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoryRepository,
  ) { }


  async execute(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
