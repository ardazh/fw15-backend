const db = require("../helpers/db.helper")
const table = "cities"

exports.findAll = async function (page, limit, search, sort, sortBy) {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 7
    search = search || ""
    sort = sort || "id"
    sortBy = sortBy || "ASC"

    const offset = (page - 1) * limit

    const query = `
    SELECT * FROM "${table}" 
    WHERE "name" LIKE $3 
    ORDER BY "${sort}" ${sortBy} 
    LIMIT $1 OFFSET $2
    `
    const values = [limit, offset, `%${search}%`]

    const { rows } = await db.query(query, values)
    return rows
}

exports.findCity = async function (sort, sortBy) {
    sort = sort || "id"
    sortBy = sortBy || "ASC"

    const query = `
  SELECT * FROM "${table}" 
  ORDER BY "${sort}" ${sortBy} 
  LIMIT 7 OFFSET 1
  `

    const { rows } = await db.query(query)
    return rows
}

exports.findOne = async function (id) {
    const query = `
  SELECT * FROM  "${table}"
  WHERE id=$1`

    const values = [id]
    const { rows } = await db.query(query, values)
    return rows[0]
}
