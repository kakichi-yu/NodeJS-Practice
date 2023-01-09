import express from "express";
import { body } from "express-validator"
import { registBook } from "../controllers/books.mjs";
import Book from "../models/book.mjs"

const router = express.Router();

// /api/books
router.get("/", async (req, res) => {
    const books = await Book.find().sort({ updatedAt: -1 });
    res.json(books)
})
// 個別の本
router.get("/:id", async (req, res) => {
    const _id = req.params.id
    const book = await Book.find({ _id: _id });
    res.json(book)
})
// delete
router.delete("/:id", async (req, res) => {
    const _id = req.params.id
    await Book.deleteOne({ _id });
    res.json({ "msg:": "Delete succeeded." })
})
// POST
router.post("/");
router.post("/",
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("comment").notEmpty(),
    body("rating").notEmpty().isInt({ min: 1, max: 5 }),
    await registBook
)
// UPDATE
router.patch("/:id", async (req, res) => {
    const { title, description, comment, rating } = req.body;
    const _id = req.params.id
    const book = await Book.findById(_id);
    if (title != undefined) book.title = title;
    if (description != undefined) book.description = description
    if (comment != undefined) book.comment = comment;
    if (rating != undefined) book.rating = rating;
    await book.save();
    res.json(book)
})


export default router;