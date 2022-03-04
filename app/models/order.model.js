"use strict";
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    //===================================================
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    //===================================================
    status: {
        type: String,
        default: 'Processing'
    },
    data: {
        type: Object
    },
    amount: {
        type: Number
    },
    pi: {
        type: String
    },
    interval: {
        type: String,
        default: 'One Time'
    },
    invoice: {
        type: String
    },
    start: {
        type: String,
        format: Date
    },
    end: {
        type: String,
        format: Date
    },
    subscription: {
        type: String
    }
});

exports.Order = mongoose.model("orders", OrderSchema);