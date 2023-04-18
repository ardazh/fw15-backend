const admin = require("express").Router()

admin.use("/users", require("./users.router"))
admin.use("/profiles", require("./profiles.router"))

module.exports = admin
