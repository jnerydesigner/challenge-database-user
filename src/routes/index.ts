import { Router } from 'express';

import { authenticationRouter } from './authentication.routes';
import { usersRouter } from './users.routes';
import { userProfileRouter } from './userProfile.routes';
import { categoriesRouter } from './categories.routes';
import { productsRouter } from './products.routes';

const router = Router();

router.use('/', authenticationRouter);
router.use('/users', usersRouter);
router.use('/profile', userProfileRouter);
router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);

export { router };
