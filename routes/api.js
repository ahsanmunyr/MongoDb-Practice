const express = require("express");
const app = express();

// App Routes
app.use("/users", require("../app/controller/users"));
app.use("/roles", require("../app/controller/role"));
app.use("/books", require("../app/controller/books"));
app.use("/social", require("../app/controller/social"));
app.use("/dummy", require("../app/controller/dummyuser"));
// ADMIN ROUTES

module.exports = app;