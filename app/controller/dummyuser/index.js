const express = require('express');
const dummyController = require("./dummyuser.controller");
const dummyRouter = express.Router();



dummyRouter.post("/create", dummyController.create);
// dummyRouter.get("/get/:id", dummyController.get);
// dummyRouter.get("/gets", dummyController.gets);
// dummyRouter.delete("/delete/:id", dummyController.delete);
// dummyRouter.put("/update/:id", dummyController.update);

module.exports = dummyRouter;