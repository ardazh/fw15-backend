const eventRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
const uploadMiddleware = require("../middlewares/upload.middleware")
// const authMiddleware = require("../middlewares/auth.middleware")


const eventController = require("../controllers/events.controller")

eventRouter.get("/manage", eventController.getManageAllEvent)
eventRouter.get("/manage/:id", eventController.getManageDetailEvent)
eventRouter.post("/manage", uploadMiddleware("picture"), eventController.createManageEvent)
eventRouter.patch("/manage/:id", uploadMiddleware("picture"), eventController.updateManageEvent)
// eventRouter.delete("/manage/:id", eventController.deleteManageEvent)
 
eventRouter.get("/", eventController.getAllEvent)
eventRouter.get("/:id", eventController.getEvent)

module.exports = eventRouter
