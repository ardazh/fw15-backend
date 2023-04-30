const partnersRouter = require("express").Router()

const partnersController = require("../../controllers/admin/partners.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

partnersRouter.get("/", validate("getAllPartners"), partnersController.getAllPartners)
partnersRouter.get("/:id", validate("idParams"), partnersController.getOnePartners)  
partnersRouter.post("/", validate("createPartners"), partnersController.createPartners)
partnersRouter.patch("/:id", validate("idParams"), partnersController.updatePartners)
partnersRouter.delete("/:id", validate("idParams"), partnersController.deletePartners)

module.exports = partnersRouter
