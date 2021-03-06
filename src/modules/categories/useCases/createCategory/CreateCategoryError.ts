import { AppError } from "../../../../shared/errors/AppError";

export namespace CreateCategoryError {
  export class VerifyExistsCategory extends AppError {
    constructor() {
      super('Category Not Found', 404);
    }
  }

  export class VerifyExistsCategoryTrue extends AppError {
    constructor() {
      super('Category Found', 404);
    }
  }

  export class VerifyExistsCategoryInDatBase extends AppError {
    constructor() {
      super('Category not exists in Database', 404);
    }
  }
}
