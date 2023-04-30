const wishlistsRouter = require("express").Router()

const wishlistsController = require("../../controllers/admin/wishlists.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../../middlewares/validator.middleware")

wishlistsRouter.get("/", validate("getAllWishlists"), wishlistsController.getAllWishlists)
wishlistsRouter.get("/:id", validate("idParams"), wishlistsController.getOneWishlists)  
wishlistsRouter.post("/", validate("createWishlists"), wishlistsController.createWishlists)
wishlistsRouter.patch("/:id", validate("idParams"), wishlistsController.updateWishlists)
wishlistsRouter.delete("/:id", validate("idParams"), wishlistsController.deleteWishlists)

module.exports = wishlistsRouter
