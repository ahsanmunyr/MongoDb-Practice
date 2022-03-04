const express = require('express');
const { authMiddleware } = require("../../middleware/auth.middleware");
const ValidationMiddleware = require("../../middleware/validation.middleware")
const usersController = require("./user.controller");
const usersRouter = express.Router();
const validation = new ValidationMiddleware();


usersRouter.post("/register",
    validation.validateUserRegistration(),
    usersController.register,
);

usersRouter.post("/login",
    validation.validateUserLogin(),
    usersController.login,
);
module.exports = usersRouter;