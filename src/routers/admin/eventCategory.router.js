const eventCategoryRouter = require("express").Router()

const eventCategoryController = require("../../controllers/admin/eventCategry.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

eventCategoryRouter.get("/", validate("getAllEventCategories"), eventCategoryController.getAllEventCategory)
eventCategoryRouter.get("/:id", validate("idParams"), eventCategoryController.getOneEventCategory)
eventCategoryRouter.post("/", validate("createEventCategories"), eventCategoryController.createEventCategory)
eventCategoryRouter.patch("/:id", validate("idParams"), eventCategoryController.updateEventCategory)
eventCategoryRouter.delete("/:id", validate("idParams"), eventCategoryController.deleteEventCategory)

module.exports = eventCategoryRouter
