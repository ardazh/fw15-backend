const deviceTokenRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")
// const authMiddleware = require("../middlewares/auth.middleware")


const deviceTokenController = require("../controllers/deviceToken.controller") 

deviceTokenRouter.post("/", deviceTokenController.saveToken)

module.exports = deviceTokenRouter
