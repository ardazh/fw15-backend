const categoryRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")
// const authMiddleware = require("../middlewares/auth.middleware")


const categoryController = require("../controllers/category.controller") 
 
categoryRouter.get("/", categoryController.getCategory)

module.exports = categoryRouter
