const router = require("express").Router()
const authMiddleware = require("../middlewares/auth.middleware")

router.get("/", (request, response) => {
    return response.json({
        success: true,
        message: "Backend is running well"
    })
})

router.use("/auth", require("./auth.router"))
router.use("/admin", authMiddleware, require("./admin/admin.router"))
router.use("/profile", authMiddleware, require("./profiles.router"))
router.use("/city", authMiddleware, require("./city.router"))
router.use("/category", authMiddleware, require("./category.router"))
router.use("/partners", authMiddleware, require("./partners.router"))
router.use("/changePassword", require("./changePassword.router"))
router.use("/wishlists", authMiddleware, require("./wishlists.router"))
router.use("/events", authMiddleware, require("./events.router"))
router.use("/reservations", authMiddleware, require("./reservations.router"))

router.use("*", (request, response) =>{
    return response.status(404).json({
        success: false,
        message: "Resource not found"
    })
})

module.exports = router
