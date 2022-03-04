const express = require('express');
const bookmarkController = require("./bookmark.controller");
const rolesRouter = express.Router();



rolesRouter.post("/create", bookmarkController.create);
rolesRouter.get("/get/:id", bookmarkController.get);
rolesRouter.get("/gets", bookmarkController.gets);
rolesRouter.delete("/delete/:id", bookmarkController.delete);
rolesRouter.put("/update/:id", bookmarkController.update);

module.exports = rolesRouter;