const reservationStatusRouter = require("express").Router()

const reservationStatusController = require("../../controllers/admin/reservationStatus.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

reservationStatusRouter.get("/", validate("getAllReservationStatus"), reservationStatusController.getAllReservationStatus)
reservationStatusRouter.get("/:id", validate("idParams"), reservationStatusController.getOneReservationStatus)  
reservationStatusRouter.post("/", validate("createReservationStatus"), reservationStatusController.createReservationStatus)
reservationStatusRouter.patch("/:id", validate("idParams"), reservationStatusController.updateReservationStatus)
reservationStatusRouter.delete("/:id", validate("idParams"), reservationStatusController.deleteReservationStatus)

module.exports = reservationStatusRouter
