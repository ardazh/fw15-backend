const wishlistsRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")


const wishlistsController = require("../controllers/wishlists.controller") 
 
wishlistsRouter.get("/", wishlistsController.getWishlists)
wishlistsRouter.post("/", wishlistsController.createWishlists)
wishlistsRouter.delete("/:id", wishlistsController.deleteWishlists)


module.exports = wishlistsRouter
