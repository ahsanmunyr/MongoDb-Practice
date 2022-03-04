const userService = require("../../service/user.service")
const generateToke = require("../../middleware/auth.middleware");
const bcrypt = require("bcrypt")

class Users {

    async register(req, res) {
        try {

            delete req.body.confirmPassword;
            req.body.password = await bcrypt.hash(req.body.password, 10)
            let register = await userService.create(req.body)
            register._doc.token = register.AuthGenrateToken();
            delete register.password;
            res.status(200).send({
                success: true,
                status: 200,
                msg: "Register successfully",
                user: register,
            });
        } catch (error) {
            res.status(500).send({ success: false, status: 500, msg: error.message });
        }
    };

    async login(req, res) {
        try {
            req.user._doc.token = req.user.AuthGenrateToken();
            delete req.user._doc.password;
            res.status(200).send({
                success: true,
                status: 200,
                msg: "Login successfully",
                user: req.user,
            });
        } catch (error) {
            res.status(500).send({ success: false, status: 500, msg: error.message });
        }
    };
}

const usersController = new Users();
module.exports = usersController;