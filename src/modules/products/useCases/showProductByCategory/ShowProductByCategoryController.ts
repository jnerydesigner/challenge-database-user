import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProductsByCategoryUseCase } from './ShowProductsByCategoryUseCase';


export class ShowProductByCategoryController {
  async execute(request: Request, response: Response) {
    const { categoryId } = request.params;
    const { page = 1 } = request.query;



    const showProductsByCategory = container.resolve(ShowProductsByCategoryUseCase);

    const products = await showProductsByCategory.execute(+page, +categoryId);

    return response.status(201).json(products);
  }


}
