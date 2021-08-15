import { Request, Response, Router } from 'express';
import multer from 'multer';

import { CreateProductController } from '../modules/products/useCases/createProduct/CreateProductController';
import { ShowAllProductsController } from '../modules/products/useCases/showAllProducts/ShowAllProductsController';
import { UpdateProductController } from '../modules/products/useCases/updateProduct/UpdateProductController';
import { DeleteProductController } from '../modules/products/useCases/deleteProduct/DeleteProductController';
import { ShowOneProductController } from '../modules/products/useCases/showOneProduct/ShowOneProductController';
import { ShowProductByCategoryController } from '../modules/products/useCases/showProductByCategory/ShowProductByCategoryController';
import { UploadImageProductController } from '../modules/products/useCases/uploadImageProduct/UploadImageProductController';
import uploadConfig from '../config/upload';

const productsRouter = Router();
const createProductController = new CreateProductController();
const showAllProductsController = new ShowAllProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const showOneProductController = new ShowOneProductController();
const showProductByCategoryController = new ShowProductByCategoryController();
const uploadImageProductController = new UploadImageProductController();

const upload = multer(uploadConfig);
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
productsRouter.patch('/image/:productId', upload.single('productImage'), uploadImageProductController.execute);

export { productsRouter };
