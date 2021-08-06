import { Request, Response, Router } from 'express';

import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { ShowAllProductsController } from '../modules/products/useCases/showAllProducts/ShowAllProductsController';
import { UpdateProductController } from '../modules/products/useCases/updateProduct/UpdateProductController';
import { DeleteProductController } from '../modules/products/useCases/deleteProduct/DeleteProductController';
import { ShowOneProductController } from '../modules/products/useCases/showOneProduct/ShowOneProductController';
import { ShowProductByCategoryController } from '../modules/products/useCases/showProductByCategory/ShowProductByCategoryController';

const productsRouter = Router();
const createProductController = new CreateProductController();
const showAllProductsController = new ShowAllProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const showOneProductController = new ShowOneProductController();
const showProductByCategoryController = new ShowProductByCategoryController();
// categoriesRouter.get('/', (req: Request, res: Response) => {
//   return res.json({
//     message: 'Tudo deu certo'
//   })
// });

productsRouter.post('/', createProductController.execute);
productsRouter.get('/', showAllProductsController.execute);
productsRouter.patch('/:id', updateProductController.execute);
productsRouter.delete('/:id', deleteProductController.execute);
productsRouter.get('/:id', showOneProductController.execute);
productsRouter.get('/category/:categoryId', showProductByCategoryController.execute);

export { productsRouter };
