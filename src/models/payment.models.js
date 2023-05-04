const db = require("../helpers/db.helper")
const table = "paymentMethods"

exports.findPaymentMethods = async function(id){

    const query = `
    SELECT * FROM "${table}"
    WHERE "id" = $1
    `
    const values = [id]
    const {rows} = await db.query(query, values)
    return rows[0]
}
 
