const cityRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")
// const authMiddleware = require("../middlewares/auth.middleware")


const cityController = require("../controllers/city.controller") 
 
cityRouter.get("/", cityController.getCity)
cityRouter.get("/allCity", cityController.getAllCity)

module.exports = cityRouter
