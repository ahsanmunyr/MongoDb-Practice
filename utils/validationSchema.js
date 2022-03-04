const Joi = require("joi");

exports.Validator = class Validator {
    constructor() { }

    //********************** User Register Validate************************************* */
    validateUserRegisterJoi(data) {
        const schema = Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            confirmPassword: Joi.string().required(),
            // role: Joi.string().required(),
            profile_img: Joi.string(),
        });
        return schema.validateAsync(data);
    }

    //********************** User Login Validate************************************* */
    validateUserLoginJoi(data) {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        return schema.validateAsync(data);
    }
}
