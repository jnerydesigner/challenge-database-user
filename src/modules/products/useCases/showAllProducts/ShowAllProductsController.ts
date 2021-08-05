import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAllProductsUseCase } from './ShowAllProductsUseCase';


export class ShowAllProductsController {
  async execute(request: Request, response: Response) {


    const showProducts = container.resolve(ShowAllProductsUseCase);

    const products = await showProducts.execute();

    return response.status(201).json(products);
  }


}
