const categoryRouter = require("express").Router()

const categoryController = require("../../controllers/admin/category.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

categoryRouter.get("/", validate("getAllCategory"), categoryController.getAllCategory)
categoryRouter.get("/:id", validate("idParams"), categoryController.getOneCategory)  
categoryRouter.post("/", validate("createCategory"), categoryController.createCategory)
categoryRouter.patch("/:id", validate("idParams"), categoryController.updateCategory)
categoryRouter.delete("/:id", validate("idParams"), categoryController.deleteCategory)

module.exports = categoryRouter
