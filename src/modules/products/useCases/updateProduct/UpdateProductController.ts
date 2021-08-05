import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProductUseCase } from './UpdateProductUseCase';


export class UpdateProductController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const product = request.body;


    const updateProduct = container.resolve(UpdateProductUseCase);

    const productAffected = await updateProduct.execute(+id, product);

    return response.status(201).json(productAffected);
  }


}
