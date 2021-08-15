import { AppError } from "../../../shared/errors/AppError";

export namespace GeneralProductError {
  export class VerifyExixtentsProducts extends AppError {
    constructor() {
      super('Products Not Found', 404);
    }
  }

  export class VerifyExistsCategoryInDatBase extends AppError {
    constructor() {
      super('Category not exists in Database', 404);
    }
  }

  export class ProductCategoriNotExist extends AppError {
    constructor() {
      super('Category not exist on Database', 404);
    }
  }

  export class UploadFileNotFound extends AppError {
    constructor() {
      super('Upload File not found', 404);
    }
  }
}
