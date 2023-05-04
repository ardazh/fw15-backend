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

exports.findOne = async function(id){

    const query = `
      SELECT * FROM "${table}"
      WHERE "id" = $1
      `
    const values = [id]
    const {rows} = await db.query(query, values)
    return rows[0]
}

exports.findHistory = async function(id){
    const queries = `
    SELECT
    "e"."title",
    "c"."name",
    "e"."date"
    FROM "reservations" "r"
    INNER JOIN "events" "e" ON "e"."id" = "r"."eventId"
    INNER JOIN "cities" "c" ON "c"."id" = "e"."cityId"
    WHERE "r"."userId" = $1
    `  
    const values = [id]
    const {rows} = await db.query(queries,values)  
    return rows
}

exports.findDetailHistory = async function(id, userId){
    const queries = `
    SELECT
    "e"."title",
    "c"."name",
    "e"."date",
    "rstat"."name" AS "reservationStatus",
    "pm"."name" AS "paymentStatus"
    FROM "reservations" "r"
    INNER JOIN "events" "e" ON "e"."id" = "r"."eventId"
    INNER JOIN "cities" "c" ON "c"."id" = "e"."cityId"
    INNER JOIN "reservationStatus" "rstat" ON "rstat"."id" = "r"."statusId"
    INNER JOIN "paymentMethods" "pm" ON "pm"."id" = "r"."paymentMethodId"
    WHERE "r"."id" = $1 AND "r"."userId" = $2
    `  
    const values = [id, userId]
    const {rows} = await db.query(queries,values)  
    return rows[0]
}

exports.update = async function(id, data){
    const query = `
  UPDATE "${table}" SET    
  "statusId" = COALESCE(NULLIF($2::INTEGER, NULL), "statusId"),
  "paymentMethodId" = COALESCE(NULLIF($3::INTEGER, NULL), "paymentMethodId")
  WHERE "id" = $1 
  RETURNING *
  `
    const values = [id, data.statusId, data.paymentMethodId]
    const {rows} = await db.query(query, values)
    return rows[0]
}
