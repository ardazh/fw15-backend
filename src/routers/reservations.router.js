const reservationsRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")


const reservationsController = require("../controllers/reservations.controller") 
 
reservationsRouter.post("/", reservationsController.createReservations)


module.exports = reservationsRouter
