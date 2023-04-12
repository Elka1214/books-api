const express = require("express");
const books = express.Router();
const Book = require("../models/books");
const Seed = require("../models/seed");

// Routes
// Index
books.get("/", async (req, res) => {
  try {
    const foundBooks = await Book.find();
    res.status(200).json(foundBooks);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Create Book
books.post("/", async (req, res) => {
  try {
    const createdBook = await Book.create(req.body);
    res.status(200).json(createdBook);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Seed
books.get("/seed", async (req, res) => {
  try {
    const insertedBooks = await Book.insertMany(Seed);
    res.status(200).json({ message: "Seed successful" });
  } catch (err) {
    res.status(400).json({ message: "Seed unsuccessful" });
  }
});

// Show Book
books.get("/:id", async (req, res) => {
  try {
    const foundBook = await Book.findById(req.params.id);
    res.status(200).json(foundBook);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Update Book
books.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/books/${req.params.id}`);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Delete Book
books.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book has been deleted!" });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Export
module.exports = books;
