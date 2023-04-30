const paymentMethodsRouter = require("express").Router()

const paymentMethodsController = require("../../controllers/admin/paymentMethods.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

paymentMethodsRouter.get("/", validate("getAllPaymentMethods"), paymentMethodsController.getAllPaymentMethods)
paymentMethodsRouter.get("/:id", validate("idParams"), paymentMethodsController.getOnePaymentMethods)  
paymentMethodsRouter.post("/", validate("createPaymentMethods"), paymentMethodsController.createPaymentMethods)
paymentMethodsRouter.patch("/:id", validate("idParams"), paymentMethodsController.updatePaymentMethods)
paymentMethodsRouter.delete("/:id", validate("idParams"), paymentMethodsController.deletePaymentMethods)

module.exports = paymentMethodsRouter
