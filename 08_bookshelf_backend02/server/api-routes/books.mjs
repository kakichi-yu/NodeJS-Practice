import express from "express";
import { body } from "express-validator"
import { registBook, updateBook, getAllBooks, deleteBook, getBookById } from "../controllers/books.mjs";
import { requestErrorHandler } from "../helpers/helper.mjs";

const router = express.Router();

// /api/books
router.get("/",
    requestErrorHandler(getAllBooks)
)
// 個別の本
router.get("/:id",
    requestErrorHandler(getBookById)
)
// delete
router.delete("/:id",
    requestErrorHandler(deleteBook)
)
// POST
router.post("/");
router.post("/",
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("comment").notEmpty(),
    body("rating").notEmpty().isInt({ min: 1, max: 5 }),
    requestErrorHandler(registBook)
)
// UPDATE
router.patch("/:id",
    body("title").optional().notEmpty(),
    body("description").optional().notEmpty(),
    body("comment").optional().notEmpty(),
    body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
    requestErrorHandler(updateBook)
)

export default router;