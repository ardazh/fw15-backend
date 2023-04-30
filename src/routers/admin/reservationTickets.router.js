const reservationTicketsRouter = require("express").Router()

const reservationTicketsController = require("../../controllers/admin/reservationTickets.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

reservationTicketsRouter.get("/", validate("getAllReservationTickets"), reservationTicketsController.getAllReservationTickets)
reservationTicketsRouter.get("/:id", validate("idParams"), reservationTicketsController.getOneReservationTickets)  
reservationTicketsRouter.post("/", validate("createReservationTickets"), reservationTicketsController.createReservationTickets)
reservationTicketsRouter.patch("/:id", validate("idParams"), reservationTicketsController.updateReservationTickets)
reservationTicketsRouter.delete("/:id", validate("idParams"), reservationTicketsController.deleteReservationTickets)

module.exports = reservationTicketsRouter
