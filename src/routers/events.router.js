const eventRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")
// const authMiddleware = require("../middlewares/auth.middleware")


const eventController = require("../controllers/events.controller")
 
eventRouter.get("/", eventController.getEvent)
// eventRouter.post("/", eventController)
// eventRouter.patch("/", uploadMiddleware, eventController, eventController)

module.exports = eventRouter
