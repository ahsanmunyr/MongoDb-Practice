"use strict";
const mongoose = require("mongoose");

const DummySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
});

// UserSchema.plugin(deepPopulate);
exports.Dummy = mongoose.model("dummy", DummySchema);