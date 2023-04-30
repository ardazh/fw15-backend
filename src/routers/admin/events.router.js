const eventsRouter = require("express").Router()

const eventsController = require("../../controllers/admin/events.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

eventsRouter.get("/", validate("getAllEvents"), eventsController.getAllEvents)
eventsRouter.get("/:id", validate("idParams"), eventsController.getOneEvents)  
eventsRouter.post("/", validate("createEvents"), eventsController.createEvents)
eventsRouter.patch("/:id", validate("idParams"), eventsController.updateEvents)
eventsRouter.delete("/:id", validate("idParams"), eventsController.deleteEvents)

module.exports = eventsRouter 
