const jwt = require("jsonwebtoken");
const fs = require("fs");
const { findOne } = require("../service/user.service")
const compose = require("composable-middleware")
const config = require('config');
var publicKEY = config.get('jwtprivatekey');

class AuthenticationMiddleware {

    //*************************User Authenthicate ********************************************************** */
    isAuthenticated() {
        return (
            compose()
                // Attach user to request
                .use((req, res, next) => {
                    let token = req.headers['x-access-token'] || req.headers['authorization'];
                    if (!token)
                        return res.status(401).send({
                            success: false,
                            msg: "Access Denied. No token provided.",
                            code: 401,
                        });
                    // Remove Bearer from string
                    token = token.replace(/^Bearer\s+/, "");
                    try {
                        var decoded = jwt.verify(token, publicKEY);
                        req.user = decoded;
                        req.auth = token;
                        next();
                    } catch (ex) {
                        console.log("exception: " + ex);
                        res
                            .status(400)
                            .send({ success: false, msg: "Invalid token.", status: 400 });
                    }
                })
            // .use(this.isValid())
        );
    }

    //************************* User Existed In Database ********************************************************** */
    isValid() {
        return (
            compose()
                // Attach user to request
                .use((req, res, next) => {
                    let myUserService = new UserService();
                    myUserService.findOne({ id: req.user.id, blocked: false })
                        .then(user => {
                            try {
                                if (user == null) {
                                    res.status(401).send({
                                        success: false,
                                        msg: "Your account access has been blocked.",
                                        status: 401,
                                    });
                                    throw true;
                                } else {
                                    next();
                                }
                            } catch (ex) {
                                this.expireAuthToken(req.auth, 10)
                                    .then(raw => { })
                            }
                        });
                })
        );
    }
}

const authMiddleware = new AuthenticationMiddleware();
module.exports = authMiddleware;