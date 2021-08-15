import multer from 'multer';
import path from 'path';
import { newFileName } from './newFileName';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  driver: process.env.STORAGE_DRIVER,
  uploadsFolder: path.resolve(tmpFolder),
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(req, file, cb) {
      const newName = newFileName(file.originalname);
      return cb(null, newName);
    }
  }),
}
