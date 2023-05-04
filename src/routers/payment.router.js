const paymentRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")


const paymentController = require("../controllers/payment.controller") 
 
paymentRouter.post("/", paymentController.createPayment)


module.exports = paymentRouter
