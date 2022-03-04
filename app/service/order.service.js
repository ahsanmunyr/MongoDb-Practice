'use strict';

const { Order } = require('../models/order.model');
const moment = require('moment');
const select = { createdDate: 0, updatedDate: 0 }

exports.create = function (_data) {
    return new Promise(function (resolve, reject) {
        Order.create(_data, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.findById = function (id) {
    return new Promise(function (resolve, reject) {
        Order.findById(id, select, function (err, result) {
            if (err) {
                reject(err);
            } else if (!result) {
                reject({ msg: 'Order not found.' });
            } else {
                resolve(result);
            }
        })

    })
}

exports.update = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Order.update(query, data, options, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.find = function (query) {
    return new Promise(function (resolve, reject) {
        Order.find(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.findLimitPage = function (query, page, limit) {
    return new Promise(function (resolve, reject) {
        Order.find(query, select)
            .skip(limit * (page - 1) ? limit * (page - 1) : 0)
            .limit(limit ? limit : 50)
            .sort({ createdDate: -1 })
            .exec(function (err, result) {
                Book.count({}).exec(async function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ result, count });
                    }
                })
            })

    })
}

exports.findOne = function (query) {
    return new Promise(function (resolve, reject) {
        Order.findOne(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result == null) {
                    reject({ msg: "Order not found" })
                }
                resolve(result);
            }
        })

    })
}

exports.findOneAndUpdate = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Order.findOneAndUpdate(query, data, options, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.findOneAndRemove = function (query) {
    return new Promise(function (resolve, reject) {
        Order.findOneAndRemove(query, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.deleteMany = function (query) {
    return new Promise(function (resolve, reject) {
        Order.deleteMany(query, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}
