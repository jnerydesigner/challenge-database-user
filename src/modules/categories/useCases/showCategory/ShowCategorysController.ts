import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCategoryUseCase } from './ShowCategoryUseCase';


export class ShowCategorysController {
  async execute(request: Request, response: Response) {
    const showCategory = container.resolve(ShowCategoryUseCase);

    const category = await showCategory.execute()

    return response.status(201).json(category);
  }


}
