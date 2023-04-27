const changePasswordRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")
const authMiddleware = require("../middlewares/auth.middleware")


const changePasswordController = require("../controllers/changePassword.controller") 
 
changePasswordRouter.patch("/", authMiddleware, changePasswordController)

module.exports = changePasswordRouter
