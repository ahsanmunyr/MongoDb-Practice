"use strict";
const mongoose = require("mongoose");
var mongooseTypes = require("mongoose-types"); //for valid email and url
mongooseTypes.loadTypes(mongoose, "email");
var Email = mongoose.SchemaTypes.Email;
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        max: 30,
    },
    email: {
        type: Email,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users-permissions_role',
        default: "60d49b8673efdc3704545b23"
    },
    profile_img: {
        type: String,
        default: "https://easy-1-jq7udywfca-uc.a.run.app/public/images/user.png",
    },
},
    {
        timestamps: true
    }
);

UserSchema.methods.AuthGenrateToken = function () {
    const token = jwt.sign({ _id: this.id }, config.get('jwtprivatekey'));
    return token;
}


exports.User = mongoose.model("users", UserSchema);