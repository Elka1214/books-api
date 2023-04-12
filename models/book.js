// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// Create the schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  year: Number,
  quantity: { type: Number, default: 1 },
  imageURL: { type: String, default: "http://placehold.it/500x500.png" },
});

// Export
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
