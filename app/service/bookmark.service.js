'use strict';

const { Bookmark } = require('../models/bookmark.model');
const moment = require('moment');
const select = { createdDate: 0, updatedDate: 0 }

exports.create = function (_data) {
    return new Promise(function (resolve, reject) {
        Bookmark.create(_data, function (err, result) {
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
        Bookmark.findById(id, select, function (err, result) {
            if (err) {
                reject(err);
            } else if (!result) {
                reject({ msg: 'Not found.' });
            } else {
                resolve(result);
            }
        })

    })
}

exports.findLimitPage = function (query, page, limit) {
    return new Promise(function (resolve, reject) {
        Bookmark.find(query, admin_select)
            .skip(limit * (page - 1) ? limit * (page - 1) : 0)
            .limit(limit ? limit : 50)
            .sort({ createdDate: -1 })
            .exec(function (err, users) {
                Bookmark.count({}).exec(async function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ users, count });
                    }
                })
            })

    })
}

exports.update = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Bookmark.update(query, data, options, function (err, result) {
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
        Bookmark.find(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.findOne = function (query) {
    return new Promise(function (resolve, reject) {
        Bookmark.findOne(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result == null) {
                    reject({ msg: "Not found" })
                }
                resolve(result);
            }
        })

    })
}

exports.findOneAndUpdate = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Bookmark.findOneAndUpdate(query, data, options, function (err, result) {
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
        Bookmark.findOneAndRemove(query, function (err, result) {
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
        Bookmark.deleteMany(query, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}
