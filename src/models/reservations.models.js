const db = require("../helpers/db.helper")
const table = "reservations"

exports.insert = async function(data){
    const query = `
    INSERT INTO "${table}" 
    ("eventId",
    "userId",
    "statusId",
    "paymentMethodId")
    VALUES ($1, $2, $3, $4) RETURNING *
    `
    const values = [data.eventId, data.userId, data.statusId, data.paymentMethodId]
    const {rows} = await db.query(query, values)
    return rows[0]
}
