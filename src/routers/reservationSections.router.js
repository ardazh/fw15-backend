const sectionRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")


const reservationSectionsController = require("../controllers/reservationSections.controller")
 
sectionRouter.get("/", reservationSectionsController.getAllReservationSections)


module.exports = sectionRouter
