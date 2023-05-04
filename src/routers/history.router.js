const historyRouter = require("express").Router()
// const validate = require("../middlewares/validator.middleware")
// const uploadMiddleware = require("../middlewares/upload.middleware")


const historyController = require("../controllers/history.controller") 
 
historyRouter.get("/", historyController.getHistory)
historyRouter.get("/:id", historyController.getDetailHistory)


module.exports = historyRouter
