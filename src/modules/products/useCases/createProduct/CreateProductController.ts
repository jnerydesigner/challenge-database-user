import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';


export class CreateProductController {
  async execute(request: Request, response: Response) {
    const { name, manufacturingDate, expirationDate, perishableProduct, price, categoryId } = request.body;


    const createProduct = container.resolve(CreateProductUseCase);

    const product = await createProduct.execute({
      name,
      manufacturingDate,
      expirationDate,
      perishableProduct,
      price,
      categoryId
    });

    return response.status(201).json(product);
  }


}
