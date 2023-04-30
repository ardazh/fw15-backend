const reservationsRouter = require("express").Router()

const reservationsController = require("../../controllers/admin/reservations.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

reservationsRouter.get("/", validate("getAllReservations"), reservationsController.getAllReservations)
reservationsRouter.get("/:id", validate("idParams"), reservationsController.getOneReservations)  
reservationsRouter.post("/", validate("createReservations"), reservationsController.createReservations)
reservationsRouter.patch("/:id", validate("idParams"), reservationsController.updateReservations)
reservationsRouter.delete("/:id", validate("idParams"), reservationsController.deleteReservations)

module.exports = reservationsRouter
