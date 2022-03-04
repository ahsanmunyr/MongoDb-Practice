const compose = require("composable-middleware");
const { Validator } = require("../../utils/validationSchema");
const { use } = require("../controller/users");
const Service = require("../service")
const bcrypt = require("bcrypt")

module.exports = class ValidationMiddleware extends Validator {
    constructor() {
        super();
    }

    //********************** JOI VALIDATION ************************************* */

    //********************** User Register Validate Joi************************************* */
    validateUserRegistration() {
        return (
            compose()
                .use((req, res, next) => {
                    super.validateUserRegisterJoi(req.body)
                        .then(data => {
                            next();
                        }).catch(error => {
                            var errors = {
                                success: false,
                                msg: error.details[0].message,
                                data: error.name,
                            };
                            res.status(400).send(errors);
                            return;
                        });
                }).use((req, res, next) => {
                    if (req.body.password == req.body.confirmPassword) {
                        next();
                    } else {
                        res.status(400).send({ success: false, status: 400, msg: "Both Password Must Be Same" })
                    }
                })
                .use(this.validateUserEmailCheckDB())

        )
    }

    //********************** User Login Validate Joi************************************* */
    validateUserLogin() {
        return (
            compose()
                .use((req, res, next) => {
                    super.validateUserLoginJoi(req.body)
                        .then(data => {
                            next();
                        }).catch(error => {
                            var errors = {
                                success: false,
                                msg: error.details[0].message,
                                data: error.name,
                            };
                            return res.status(400).send(errors);
                        });
                })
        ).use(this.validateUserByEmailDB())
            .use(async (req, res, next) => {
                const passwordChecked = await bcrypt.compare(req.body.password, req.user.password)
                if (passwordChecked) next()
                else return res.status(400).send({ success: false, status: 400, msg: "Password Is Invalid" });
            })
    }

    //********************** DATABASE VALIDATION *************************************************************************************************************************************************************** */
    //********************** DATABASE VALIDATION *************************************************************************************************************************************************************** */

    //********************** DATABASE User Email All Ready Exist Checked ************************************* */
    validateUserEmailCheckDB() {
        return (
            compose().use(async (req, res, next) => {
                let findOne = await Service.userService.findOne({ email: req.body.email });
                if (findOne) {
                    var errors = {
                        success: false,
                        msg: "This Email Is Already Registered"
                    };
                    return res.status(400).send(errors);
                } else {
                    next();
                }
            })
        )
    }

    //********************** DATABASE User Email Varefication ************************************* */
    validateUserByEmailDB() {
        return (
            compose().use(async (req, res, next) => {
                let data = await Service.userService.findOne({ email: req.body.email });
                if (!data) {
                    var errors = {
                        success: false,
                        msg: "This Email Was Not Register"
                    };
                    return res.status(400).send(errors);
                } else {
                    req.user = data
                    next();
                }
            })
        )
    }

    //********************** DATABASE User Login Varefication ************************************* */
    validateLoginDB() {
        return (
            compose().use(async (req, res, next) => {
                let data = await Service.userService.findOne({ email: req.body.email, password: req.body.password });
                if (!data) {
                    var errors = {
                        success: false,
                        msg: "Invalid Password Or Email"
                    };
                    return res.status(400).send(errors);
                } else {
                    req.user = data
                    next();
                }
            })
        )
    }

}