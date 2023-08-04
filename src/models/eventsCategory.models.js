const db = require("../helpers/db.helper")
const table = "eventCategories"

exports.insert = async(data)=>{
    const query = `
  INSERT INTO "${table}" (
    "eventId",
    "categoryId"
    )
  VALUES ($1, $2) RETURNING *
  `
    const values = [
        data.eventId,
        data.categoryId
    ]
    const {rows} = await db.query(query, values)
    return rows[0]
}

exports.deleteByEventId = async(id)=>{
    const query = `
DELETE FROM "${table}"
WHERE "eventId"=$1
RETURNING *
`
    const values = [id]

    const {rows} = await db.query(query, values)
    return rows[0]
}

