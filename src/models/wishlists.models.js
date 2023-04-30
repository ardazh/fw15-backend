const db = require("../helpers/db.helper")
const table = "wishlists"

exports.findWishlists = async function(id){

    const query = `
    SELECT
    "e"."title",
    "e"."date",
    "c"."name" AS "location",
    "w"."userId"
    FROM "${table}" "w"
    JOIN "events" "e" ON "e"."id" = "w"."eventId"
    JOIN "cities" "c" ON "c"."id" = "e"."cityId"
    WHERE "userId" = $1
  `
    const values = [id]
    const {rows} = await db.query(query, values)
    return rows
}
exports.insert = async function(data){
    const query = `
  INSERT INTO "${table}" ("userId", "eventId")
  VALUES ($1, $2) RETURNING *
  `
    const values = [data.userId, data.eventId]
    const {rows} = await db.query(query, values)
    return rows[0]
}


