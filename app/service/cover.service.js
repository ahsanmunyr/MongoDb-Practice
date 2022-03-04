'use strict';

const { Cover } = require('../models/cover.model');
const moment = require('moment');
const select = { createdDate: 0, updatedDate: 0 }

exports.create = function (_data) {
    return new Promise(function (resolve, reject) {
        Cover.create(_data, function (err, result) {
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
        Cover.findById(id, select, function (err, result) {
            if (err) {
                reject(err);
            } else if (!result) {
                reject({ msg: 'Image not found.' });
            } else {
                resolve(result);
            }
        })

    })
}

exports.update = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Cover.update(query, data, options, function (err, result) {
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
        Cover.find(query, select, function (err, result) {
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
        Cover.find(query, select)
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
        Cover.findOne(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result == null) {
                    reject({ msg: "Image not found" })
                }
                resolve(result);
            }
        })

    })
}

exports.findOneAndUpdate = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Cover.findOneAndUpdate(query, data, options, function (err, result) {
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
        Cover.findOneAndRemove(query, function (err, result) {
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
        Cover.deleteMany(query, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}
