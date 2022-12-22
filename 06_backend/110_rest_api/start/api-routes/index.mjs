import express from "express";
import router from "./products.mjs";

const apiRouter = express.Router();
apiRouter.use("/products", router);

export default apiRouter;