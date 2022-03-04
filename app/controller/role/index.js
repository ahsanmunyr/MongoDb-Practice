const express = require('express');
const rolesController = require("./role.controller");
const rolesRouter = express.Router();



rolesRouter.post("/create", rolesController.create);
rolesRouter.get("/get/:id", rolesController.get);
rolesRouter.get("/gets", rolesController.gets);
rolesRouter.delete("/delete/:id", rolesController.delete);
rolesRouter.put("/update/:id", rolesController.update);

module.exports = rolesRouter;