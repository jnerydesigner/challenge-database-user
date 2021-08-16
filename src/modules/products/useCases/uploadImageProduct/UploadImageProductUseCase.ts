import { inject, injectable } from "tsyringe";
import { deleteFile } from "@utils/file";

import { IProductsRepository } from "../../../products/repositories/IProductsRepository";


import { IProductDTO } from "../../dto/ProductDTO";
import { GeneralProductError } from "../../errors/GeneralProductError";

@injectable()
export class UploadImageProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository,
  ) { }

  async execute(id: number, imageProduct: string) {

    const findProduct = await this.productRepository.show(id);

    if (!findProduct) {
      throw new GeneralProductError.UploadFileNotFound();
    }

    if (findProduct.driverImage === 'local') {
      const imgPath = findProduct.imageProduct.substr(28);
      await deleteFile(`./tmp/${imgPath}`);
    }

    const imgUrl = `${process.env.BASE_URL_FILE}/${imageProduct}`;

    findProduct.imageProduct = imgUrl;
    findProduct.driverImage = process.env.STORAGE_DRIVER as string;


    const updateProduct = await this.productRepository.update(id, findProduct)


    return updateProduct;
  }
}
