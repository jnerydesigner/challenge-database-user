import { app } from './app';
import * as dotenv from 'dotenv';

app.listen(process.env.PORT, () => { console.log(`Server is running in ${process.env.PORT}`) });
