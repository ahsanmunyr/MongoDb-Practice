'use strict';

const { User } = require('../models');
const moment = require('moment');
const select = { password: 0, confirmPassword: 0, createdDate: 0, updatedDate: 0 }

exports.create = function (Model, _data) {
    return new Promise(function (resolve, reject) {
        Model.create(_data, function (err, user) {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        })

    })
}

exports.findById = function (Model, userId) {
    return new Promise(function (resolve, reject) {
        Model.findById(userId, select, function (err, user) {
            if (err) {
                reject(err);
            } else if (!user) {
                reject({ msg: 'Not found.' });
            } else {
                resolve(user);
            }
        })

    })
}

const update = function (Model, query, data, options) {
    return new Promise(function (resolve, reject) {
        Model.update(query, data, options, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.find = function (Model, query) {
    return new Promise(function (resolve, reject) {
        Model.find(query, select, function (err, users) {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        })

    })
}

exports.findLimitPage = function (Model, query, page, limit) {
    return new Promise(function (resolve, reject) {
        Model.find(query, admin_select)
            .skip(limit * (page - 1) ? limit * (page - 1) : 0)
            .limit(limit ? limit : 50)
            .sort({ createdDate: -1 })
            .exec(function (err, users) {
                Model.count().exec(async function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ users, count });
                    }
                })
            })

    })
}

exports.findOne = function (Model, query) {
    return new Promise(function (resolve, reject) {
        Model.findOne(query, admin_select, function (err, user) {
            if (err) {
                reject(err);
            } else {
                if (user == null) {
                    reject({ msg: "Not found" })
                }
                resolve(user);
            }
        })

    })
}

const findOneAndUpdate = function (Model, query, data, options) {
    return new Promise(function (resolve, reject) {
        Model.findOneAndUpdate(query, data, options, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}

exports.findOneAndRemove = function (Model, query) {
    return new Promise(function (resolve, reject) {
        Model.findOneAndRemove(query, function (err, users) {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        })

    })
}

exports.deleteMany = function (Model, query) {
    return new Promise(function (resolve, reject) {
        Model.deleteMany(query, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })

    })
}

exports.findOneAndUpdate = findOneAndUpdate;
exports.update = update;