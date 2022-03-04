const path = require("path");
const appRoot = require('app-root-path')
const { create, User } = require("../../service/user.service")
module.exports = class Views {
    index(req, res) {
        res.render(path.join(appRoot.path, "views/pages/welcome.ejs"));
    };

    login(req, res) {
        res.render(path.join(appRoot.path, "views/pages/login.ejs"));
    };

    async social_callback(req, res) {
        const { user } = req.user;
        const result = await create(user)
        result._doc.token = result.AuthGenrateToken()
        res.cookie("user", JSON.stringify(result));
        // Successful authentication, redirect success.
        res.status(200).send({
            success: true,
            status: 200,
            msg: "Login successfully",
            user: result,
        });
        // res.render(path.join(appRoot.path, 'views/pages/social-success.ejs'), { user: req.user })
    }

    not_found(req, res) {
        res.render(path.join(appRoot.path, "views/error/404.ejs"));
    };
}