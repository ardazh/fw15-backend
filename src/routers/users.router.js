const userRouter = require("express").Router()

const userController = require("../controllers/users.controller") 
// const uploadMiddleware = require("../middlewares/upload.middleware")
const validate = require("../middlewares/validator.middleware")

userRouter.get("/", validate("getAllUsers"), userController.getAllUsers)
userRouter.get("/:id", validate("idParams"), userController.getOneUser)  
userRouter.post("/", validate("createUser"), userController.createUser)
userRouter.patch("/:id", validate("idParams"), userController.updateUser)
userRouter.delete("/:id", validate("idParams"), userController.deleteUser)

module.exports = userRouter
 