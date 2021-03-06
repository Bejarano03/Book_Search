const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new mongoose.Schema({
    authors: {type: String, required: true},
    title: { type: String, required: true},
    authors: { type: String, required: true},
    description: String,
    link: { type: String},
    image: {type: String},
    date: {type: Date, default: Date.now}
});

const Book = mongoose.model("Book", books);

module.exports = Book;