const authService = require("./auth.service");
const bookService = require("./book.service");
const bookmarkService = require("./bookmark.service");
const coverService = require("./cover.service");
const orderService = require("./order.service");
const roleService = require("./role.service");
const userService = require("./user.service");

module.exports = {
    authService,
    bookService,
    bookmarkService,
    coverService,
    orderService,
    roleService,
    userService,
}