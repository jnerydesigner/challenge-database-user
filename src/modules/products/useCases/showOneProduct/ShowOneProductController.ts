import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowOneProductUseCase } from './ShowOneProductUseCase';


export class ShowOneProductController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const showOneProduct = container.resolve(ShowOneProductUseCase);

    const product = await showOneProduct.execute(+id)

    return response.status(201).json(product);
  }


}
