const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const explode = file.originalname.split(".").length
        const ext = file.originalname.split(".")[explode - 1]
        const filename = (new Date().getTime()).toString() + "." + ext
        cb(null, filename)
    }
})

const upload = multer({storage})

const uploadMiddleware =(field) => upload.single(field)

module .exports = uploadMiddleware
