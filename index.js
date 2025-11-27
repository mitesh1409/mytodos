import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { homeController } from './controllers/home.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.set('view engine', 'ejs');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));

app.get('/', homeController);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
