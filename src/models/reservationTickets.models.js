const db = require("../helpers/db.helper")
const table = "reservationTickets"

exports.getTicketInfo = async(id) => {
    const query = `
  SELECT
  "r"."id" AS "reservationId",
  "e"."id" AS "eventId",
  "e"."title" AS "eventName",
  "rs"."name" AS "section",
  "rs"."price" AS "price",
  "rt"."quantity" AS "quantity",
  "rst"."name" AS "reservatioinStatus",
  "pm"."name" AS "paymentMethod"
  FROM "reservationTickets" "rt"
  INNER JOIN "reservationSections" "rs" ON "rs"."id" = "rt"."sectionId"
  INNER JOIN "reservations" "r" ON "r"."id" = "rt"."reservationId"
  INNER JOIN "events" "e" ON "e"."id" = "r"."eventId"
  INNER JOIN "reservationStatus" "rst" ON "rst"."id" = "r"."statusId"
  INNER JOIN "paymentMethods" "pm" ON "pm"."id" = "r"."paymentMethodId"
  WHERE "r"."id" = $1
  `  
    const values = [id]
    const {rows} = await db.query(query,values)  
    return rows[0]
}

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

exports.findOneByReservationId = async (id) => {
    const query = `
  SELECT * FROM "${table}" WHERE "reservationId" = $1 `
    const values = [id]
    const { rows } = await db.query(query, values)
    return rows[0]
}

