import { Request, Response, Router } from 'express';

import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';
import { ShowCategorysController } from '../modules/categories/useCases/showCategory/ShowCategorysController';
import { UpdateCategorysController } from '../modules/categories/useCases/updateCategories/UpdateCategorysController';
import { DeleteCategoryController } from '../modules/categories/useCases/deleteCategory/DeleteCategoryController';
import { ShowOneCategorysController } from '../modules/categories/useCases/showOneCategories/ShowOneCategorysController';

const categoriesRouter = Router();
const createCategoryController = new CreateCategoryController();
const showCategorysController = new ShowCategorysController();
const updateCategorysController = new UpdateCategorysController();
const deleteCategoryController = new DeleteCategoryController();
const showOneCategorysController = new ShowOneCategorysController();
// categoriesRouter.get('/', (req: Request, res: Response) => {
//   return res.json({
//     message: 'Tudo deu certo'
//   })
// });

categoriesRouter.post('/', createCategoryController.execute);
categoriesRouter.get('/', showCategorysController.execute);
categoriesRouter.patch('/', updateCategorysController.execute);
categoriesRouter.delete('/:id', deleteCategoryController.execute);
categoriesRouter.get('/:id', showOneCategorysController.execute);

export { categoriesRouter };
