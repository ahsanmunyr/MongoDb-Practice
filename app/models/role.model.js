"use strict";
const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    },
});

// UserSchema.plugin(deepPopulate);
exports.Role = mongoose.model("users-permissions_role", RoleSchema);