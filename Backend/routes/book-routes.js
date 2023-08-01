const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books-controller");

const Book = require("../model/Book");

router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBook);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBookById);
router.delete("/:id",bookController.deleteById);
module.exports = router;
