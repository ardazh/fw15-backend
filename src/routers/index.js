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
router.use("/city", require("./city.router"))
router.use("/category", require("./category.router"))
router.use("/partners", require("./partners.router"))
router.use("/changePassword", authMiddleware, require("./changePassword.router"))
router.use("/wishlists", authMiddleware, require("./wishlists.router"))
router.use("/events", require("./events.router"))
router.use("/reservations", authMiddleware, require("./reservations.router"))
router.use("/payment", authMiddleware, require("./payment.router"))
router.use("/history", authMiddleware, require("./history.router"))

router.use("*", (request, response) => {
    return response.status(404).json({
        success: false,
        message: "Resource not found"
    })
})

module.exports = router
