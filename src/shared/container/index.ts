import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';


import { ICategoryRepository } from '../../modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/categories/repositories/CategoriesRepository';

import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '../../modules/products/repositories/ProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);


container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);
