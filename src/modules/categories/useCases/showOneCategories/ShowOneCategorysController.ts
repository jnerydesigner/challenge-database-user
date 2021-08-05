import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowOneCategoryUseCase } from './ShowOneCategoryUseCase';


export class ShowOneCategorysController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const showOneCategory = container.resolve(ShowOneCategoryUseCase);

    const category = await showOneCategory.execute(+id)

    return response.status(201).json(category);
  }


}
