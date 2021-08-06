import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAllProductsUseCase } from './ShowAllProductsUseCase';


export class ShowAllProductsController {
  async execute(request: Request, response: Response) {
    const { page = 1 } = request.query;



    const showProducts = container.resolve(ShowAllProductsUseCase);

    const products = await showProducts.execute(+page);

    return response.status(201).json(products);
  }


}
