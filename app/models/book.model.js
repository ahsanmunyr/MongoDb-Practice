"use strict";
const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     Description: {
//         type: String,
//         max: 100,
//     },
//     Access: {
//         type: String,
//         max: 30,
//     },
//     FolderID: {
//         type: String,
//         required: true,
//     },
//     Title: {
//         type: String,
//         required: true,
//     },
//     published_at: {
//         type: Date,
//         default: Date.now,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: null,
//     },
//     Cover: {
//         type: String,
//         required: true
//     },
//     created_by: {
//         type: String,
//         required: true
//     },
//     updated_by: {
//         type: String,
//         required: true
//     },
//     releaseSchedule: {
//         type: String,
//         required: true
//     },

// });

const BookSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true
    },
    Description: {
        type: String,
        default: ' '
    },
    Cover: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'covers',
    },
    FolderID: {
        type: String,
        required: true,
        unique: true
    },
    Access: {
        type: String,
        enum: ["free", "locked", "paid"],
        default: 'paid'
    },
    releaseSchedule: {
        type: String,
        default: 'Mon - Wen - Fri'
    }
},
    {
        timestamps: true
    });

exports.Book = mongoose.model("books", BookSchema);