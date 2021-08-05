import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';


export class CreateCategoryController {
  async execute(request: Request, response: Response) {
    const { name, description, slug } = request.body;


    const createCategory = container.resolve(CreateCategoryUseCase);

    const category = await createCategory.execute({
      name,
      description,
      slug
    });

    return response.status(201).json(category);
  }


}
