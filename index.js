require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Books = require("./controllers/books_controller");
app.use(express.json());
app.use(cors());

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB: ", process.env.MONGO_URI);
  });

// Books
const booksController = require("./controllers/books_controller");
app.use("/books", booksController);

// Routes
app.get("/", (req, res) => {
  res.send("Index Page...");
});

// Listener
app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}...`);
});
