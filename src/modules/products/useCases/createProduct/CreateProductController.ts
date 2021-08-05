import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';


export class CreateProductController {
  async execute(request: Request, response: Response) {
    const { name, manufacturingDate, expirationDate, perishableProduct, price } = request.body;

    // price.toString();
    // console.log(price.toString().match('.'))

    const createProduct = container.resolve(CreateProductUseCase);

    const product = await createProduct.execute({
      name,
      manufacturingDate,
      expirationDate,
      perishableProduct,
      price
    });

    // const product = {
    //   name,
    //   manufacturingDate,
    //   expirationDate,
    //   perishableProduct,
    //   price
    // };



    return response.status(201).json(product);
  }


}
