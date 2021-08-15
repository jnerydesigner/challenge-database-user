import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { pagination } from 'typeorm-pagination'

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import './database';
import './shared/container';
import { router } from './routes';
import { AppError } from './shared/errors/AppError';
import uploadConfig from '../src/config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pagination);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.use('/api/v1', router);
app.use('/files', express.static(uploadConfig.uploadsFolder));


app.use(
  (err: Error, request: express.Request, response: express.Response, _next: express.NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

export { app };
