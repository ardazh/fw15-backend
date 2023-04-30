const cityRouter = require("express").Router()

const cityController = require("../../controllers/admin/city.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

cityRouter.get("/", validate("getAllCity"), cityController.getAllCity)
cityRouter.get("/:id", validate("idParams"), cityController.getOneCity)  
cityRouter.post("/", validate("createCity"), cityController.createCity)
cityRouter.patch("/:id", validate("idParams"), cityController.updateCity)
cityRouter.delete("/:id", validate("idParams"), cityController.deleteCity)

module.exports = cityRouter 
