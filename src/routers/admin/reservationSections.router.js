const reservationSectionsRouter = require("express").Router()

const reservationSectionsController = require("../../controllers/admin/reservationSections.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

reservationSectionsRouter.get("/", validate("getAllReservationSections"), reservationSectionsController.getAllReservationSections)
reservationSectionsRouter.get("/:id", validate("idParams"), reservationSectionsController.getOneReservationSections)  
reservationSectionsRouter.post("/", validate("createReservationSections"), reservationSectionsController.createReservationSections)
reservationSectionsRouter.patch("/:id", validate("idParams"), reservationSectionsController.updateReservationSections)
reservationSectionsRouter.delete("/:id", validate("idParams"), reservationSectionsController.deleteReservationSections)

module.exports = reservationSectionsRouter
