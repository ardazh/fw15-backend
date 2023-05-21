const eventRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
const uploadMiddleware = require("../middlewares/upload.middleware")
const authMiddleware = require("../middlewares/auth.middleware")


const eventController = require("../controllers/events.controller")

eventRouter.get("/manage", authMiddleware, eventController.getManageAllEvent)
eventRouter.get("/manage/:id", authMiddleware, eventController.getManageDetailEvent)
eventRouter.post("/manage", authMiddleware, uploadMiddleware("picture"), eventController.createManageEvent)
eventRouter.patch("/manage/:id", uploadMiddleware("picture"), eventController.updateManageEvent)


eventRouter.get("/", eventController.getAllEvent)
eventRouter.get("/:id", eventController.getEvent)

eventRouter.delete("/manage/:id", authMiddleware.apply, eventController.deleteManageEvent)

module.exports = eventRouter
