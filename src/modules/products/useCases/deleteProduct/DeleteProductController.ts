import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProductUseCase } from './DeleteProductUseCase';


export class DeleteProductController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;


    const deleteProduct = container.resolve(DeleteProductUseCase);

    const productDeleted = await deleteProduct.execute(+id);

    return response.status(201).json(productDeleted);
  }


}
