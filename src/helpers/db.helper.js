const {Pool} = require("pg")

const db = new Pool({
    connectionString: process.env.DATABASE
})

db.connect().then(() =>{
    console.log("Data connected!")
}).catch(() =>{
    console.log("Failed to connect  to Database")
})

module.exports = db
