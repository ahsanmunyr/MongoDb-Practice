'use strict';

const { Role } = require('../models/role.model');
const moment = require('moment');
const select = { createdDate: 0, updatedDate: 0 }

exports.create = function (_data) {
    return new Promise(function (resolve, reject) {
        Role.create(_data, function (err, result) {
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
        Role.findById(id, select, function (err, result) {
            if (err) {
                reject(err);
            } else if (!result) {
                reject({ msg: 'Role not found.' });
            } else {
                resolve(result);
            }
        })

    })
}

exports.update = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Role.update(query, data, options, function (err, result) {
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
        Role.find(query, select, function (err, result) {
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
        Role.findOne(query, select, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result == null) {
                    reject({ msg: "Role not found" })
                }
                resolve(result);
            }
        })

    })
}

exports.findOneAndUpdate = function (query, data, options) {
    return new Promise(function (resolve, reject) {
        Role.findOneAndUpdate(query, data, options, function (err, result) {
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
        Role.findOneAndRemove(query, function (err, result) {
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
        Role.deleteMany(query, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })

    })
}
