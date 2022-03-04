"use strict";
const mongoose = require("mongoose");


const CoverSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alternativeText: {
        type: String
    },
    caption: {
        type: String
    },
    width: {
        type: Number
    },
    height: {
        type: Number,
    },
    formats: {
        type: Object
    },
    hash: {
        type: String,
        required: true
    },
    ext: {
        type: String
    },
    mime: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    previewUrl: {
        type: String,
        required: true
    },
    provider: {
        type: String
    },
    provider_metadata: {
        type: Object
    },
    related: {
        type: String
    },
    created_by: {
        type: String
    },
    updated_by: {
        type: String
    }
});


exports.Cover = mongoose.model("covers", CoverSchema);
