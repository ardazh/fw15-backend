require("dotenv").config({
    path: ".env"
})

const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.urlencoded({extended: true, limit: "20mb"}))
// app.use(cors({
//     origin: "http://localhost:5173",
//     optionsSuccessStatus: 200
// }))

app.use(cors())

app.use("/uploads", express.static("uploads"))

app.use("/", require("./src/routers"))

app.get("/", (request, response) => {
    return response.json({
        success: true,
        message: "Backend is running well"
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})
