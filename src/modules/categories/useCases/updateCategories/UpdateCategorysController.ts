import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';


export class UpdateCategorysController {
  async execute(request: Request, response: Response) {
    const { name, description, slug, id } = request.body;
    const updateCategory = container.resolve(UpdateCategoryUseCase);

    const category = await updateCategory.execute(id, { name, slug, description })

    return response.status(201).json(category);
  }


}
