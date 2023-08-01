const Book = require("../model/Book");

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Book Found" });
  }
  return res.status(200).json({ books });
};

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Product Found" });
  }
  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "unable to add" });
  }

  return res.status(201).json({ book });
};

const updateBookById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "unable to update" });
  }

  return res.status(201).json({ book });
};

const deleteById = async (req, res, next) => {
  const id = req.params.id;
  //   const { name, author, description, price, available } = req.body;

  let book;

  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "unable to delete" });
  }

  return res.status(200).json({ book });
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteById = deleteById;
