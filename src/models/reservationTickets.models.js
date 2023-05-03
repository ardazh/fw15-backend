const db = require("../helpers/db.helper")
const table = "reservationTickets"

exports.insert = async function(data){
    const query = `
    INSERT INTO "${table}" 
    ("reservationId",
    "sectionId",
    "quantity")
    VALUES ($1, $2, $3) RETURNING *
    `
    const values = [data.reservationId, data.sectionId, data.quantity]
    const {rows} = await db.query(query, values)
    return rows[0]
}

