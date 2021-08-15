import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadImageProductUseCase } from './UploadImageProductUseCase';


export class UploadImageProductController {
  async execute(request: Request, response: Response) {
    const { productId } = request.params;
    const productImage = request.file?.filename as string;

    console.log(productId);

    const updateImageProduct = container.resolve(UploadImageProductUseCase);

    const productAffected = await updateImageProduct.execute(+productId, productImage);

    // return response.status(201).json(productAffected);

    return response.status(201).json(productAffected)
  }


}
