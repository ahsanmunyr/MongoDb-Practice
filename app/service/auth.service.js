"use strict";

const jwt = require("jsonwebtoken");
const fs = require("fs");
var privateKEY = fs.readFileSync('config/cert/accessToken.pem', 'utf8');


class AuthService {

    generateAuthToken({ id, role }) {
        var payload = {
            id,
            role
        };
        var token = jwt.sign(payload, privateKEY);
        return token;
    }
}

exports.auth = new AuthService()