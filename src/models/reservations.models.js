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
    const query = `
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
    const {rows} = await db.query(query,values)  
    return rows
}

exports.countHistory = async (id) => {
  
    const queries = `
  SELECT
  COUNT(*) AS "totalData"
  FROM "${table}" "r"
  WHERE "r"."userId" = $1
  `
    const values = [id]
    const {rows} = await db.query(queries, values)
    // console.log(rows)
    return rows[0]
}

exports.findHistoryByUserId = async(id, page, limit, sort, sortBy) => {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 4
    sort = sort || "id"
    sortBy = sortBy || "ASC"
    const offset = (page - 1) * limit
    const queries = `
  SELECT
  reservations."id", 
  events.title, 
  cities."name" AS "location", 
  events."date",
  reservations."createdAt" AS "reservationDate",
  "paymentMethods".name AS "paymentMethod"
  FROM
  "${table}"
  LEFT JOIN
  events
  ON 
    reservations."eventId" = events."id"
  LEFT JOIN
  cities
  ON 
    events."cityId" = cities."id"
  LEFT JOIN
  "paymentMethods"
  ON 
    reservations."paymentMethodId" = "paymentMethods"."id"
  WHERE reservations."userId" = $1
  ORDER BY "${sort}" ${sortBy} LIMIT $2 OFFSET $3
  `
    const values = [id, limit, offset]
    const {rows} = await db.query(queries,values)  
    // console.log(rows)
    return rows
}

exports.findDetailHistory = async function(id, userId){
    const query = `
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
    const {rows} = await db.query(query,values)  
    return rows[0]
}

exports.update = async function(id, data){
    const query = `
  UPDATE "${table}" SET
  "eventId"= COALESCE(NULLIF($2::INTEGER, NULL), "eventId"),
  "userId"= COALESCE(NULLIF($3::INTEGER, NULL), "userId"),    
  "statusId" = COALESCE(NULLIF($4::INTEGER, NULL), "statusId"),
  "paymentMethodId" = COALESCE(NULLIF($5::INTEGER, NULL), "paymentMethodId")
  WHERE "id" = $1 
  RETURNING *
  `
    const values = [id, data.eventId, data.userId, data.statusId, data.paymentMethodId]
    const {rows} = await db.query(query, values)
    return rows[0]
}
