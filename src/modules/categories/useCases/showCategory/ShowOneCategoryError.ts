import { AppError } from "../../../../shared/errors/AppError";

export namespace CreateCategoryError {
  export class VerifyExistsCategory extends AppError {
    constructor() {
      super('Category Not Found', 404);
    }
  }

  export class VerifyExistsCategoryInDatBase extends AppError {
    constructor() {
      super('Category exists in Database', 404);
    }
  }
}
