"use strict";
const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books',
        unique: true
    },
    chapter: {
        type: String,
    },
});


exports.Bookmark = mongoose.model("components_book_bookmarks", BookmarkSchema);