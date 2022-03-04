const express = require('express');
const bookController = require("./book.controller");
const rolesRouter = express.Router();



rolesRouter.post("/create", bookController.create);
rolesRouter.get("/get/:id", bookController.get);
rolesRouter.get("/gets", bookController.gets);
rolesRouter.delete("/delete/:id", bookController.delete);
rolesRouter.put("/update/:id", bookController.update);

module.exports = rolesRouter;