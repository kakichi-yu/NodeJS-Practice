import express from 'express';
// import router from "./api-routes/products.mjs"
import apiRouter from './api-routes/index.mjs';

const PORT = 8080;
const app = express();

app.use(express.json());

app.use(apiRouter);
// app.use([dirPath],[router])

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});