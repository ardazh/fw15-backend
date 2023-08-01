const db = require("../helpers/db.helper")
const table = "events"

exports.findAll = async function (params) {
    params.page = parseInt(params.page) || 1
    params.limit = parseInt(params.limit) || 7
    params.searchName = params.searchName || ""
    params.searchCategory = params.searchCategory || ""
    params.searchLocation = params.searchLocation || ""
    params.sort = params.sort || "id"
    params.sortBy = params.sortBy || ""

    const offset = (params.page - 1) * params.limit

    const query = `
    SELECT 
    "e"."id", 
    "e"."picture", 
    "e"."title", 
    "e"."date", 
    "c"."name" as "category",
    "ci"."name" as "location" 
    FROM "eventCategories" "ec"
    JOIN "events" "e" ON "e"."id" = "ec"."eventId"
    JOIN "categories" "c" ON "c"."id" = "ec"."categoryId"
    JOIN "cities" "ci" ON "ci"."id" = "e"."cityId"
    WHERE "e"."title" LIKE $3 AND "c"."name" LIKE $4 AND "ci"."name" LIKE $5
    ORDER BY "${params.sort}" ${params.sortBy}
    LIMIT $1 OFFSET $2
    `
    const values = [params.limit, offset, `%${params.searchName}%`, `%${params.searchCategory}%`, `%${params.searchLocation}%`]
    const { rows } = await db.query(query, values)
    return rows
}

exports.findOneById = async function (id) {
    const query = `
    SELECT
    "e"."id", 
    "e"."picture", 
    "e"."title", 
    "e"."date", 
    "c"."name" as "category",
    "ci"."name" as "location", 
    "e"."descriptions" 
    FROM "eventCategories" "ec"
    JOIN "events" "e" ON "e"."id" = "ec"."eventId"
    JOIN "categories" "c" ON "c"."id" = "ec"."categoryId"
    JOIN "cities" "ci" ON "ci"."id" = "e"."cityId"
    WHERE "e"."id" = $1
  `
    const values = [id]
    const { rows } = await db.query(query, values)
    return rows[0]
}

exports.findOne = async(id) => {
    const query = `
  SELECT * FROM "${table}"
  WHERE "id" = $1
  `

    const values =[id]
    const {rows} = await db.query(query, values)
    return rows[0]
}

//manage event
exports.findDetailManageEvents = async function (eventId, createdBy) {
    const query = `
  SELECT * FROM "${table}" WHERE "id" = $1 AND "createdBy" = $2
  `
    const values = [eventId, createdBy]
    const { rows } = await db.query(query, values)
    return rows[0]
}

exports.findAllManageEvents = async function (createdBy) {

    const query = `
  SELECT * FROM "${table}" 
  WHERE "createdBy" = $1
  `
    const values = [createdBy]
    const { rows } = await db.query(query, values)
    return rows
}

exports.findEventByUserCreated = async(userId, page, limit, sort, sortBy, location, search) => {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5
    sort = sort || "id"
    sortBy = sortBy || "ASC"
    location = location || ""
    search = search || ""
    const offset = (page - 1) * limit
    const query = `
    SELECT e.*, c.name AS "cityName" FROM "events" e
    INNER JOIN cities c ON c.id = e."cityId"
    INNER JOIN users ui ON e."createdBy" = ui.id
     WHERE ui.id = $4 AND 
    "title" LIKE $3
    ${location ? `AND c.name LIKE '%${location}%'` : ""}
     ORDER BY "${sort}" ${sortBy} LIMIT $1  OFFSET $2
  `  
    const values = [limit, offset, `%${search}%`, userId]
    const {rows} = await db.query(query,values)  
    return rows
}

exports.countEvent = async (id) => {
  
    const query = `
SELECT
COUNT(*) AS "totalData"
FROM "eventCategories" "ec"
JOIN "events" "e" ON "e"."id" = "ec"."eventId"
JOIN "categories" "c" ON "c"."id" = "ec"."categoryId"
JOIN "cities" "city" ON "city"."id" = "e"."cityId"
WHERE "e"."createdBy" = $1
`
    const values = [id]
    const {rows} = await db.query(query, values)
    return rows[0]
}
exports.createManageEvents = async function (data) {
    const query = `
    INSERT INTO "${table}"
    ("picture", "title", "date", "cityId", "descriptions", "createdBy")
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `
    const values = [data.picture, data.title, data.date,
        data.cityId, data.descriptions, data.createdBy]
    const { rows } = await db.query(query, values)
    return rows[0]
}

exports.updateManageEvents = async function (id, data) {
    const query = `
  UPDATE "${table}" SET
  "picture" = COALESCE(NULLIF($2, ''), "picture"),
  "title" = COALESCE(NULLIF($3, ''), "title"),    
  "date" = COALESCE(NULLIF($4::DATE, NULL), "date"),    
  "cityId" = COALESCE(NULLIF($5::INTEGER, NULL), "cityId"), 
  "descriptions" = COALESCE(NULLIF($6, ''), "descriptions")
     WHERE "id" = $1 
  RETURNING *
  `
    const values = [id, data.picture, data.title, data.date,
        data.cityId, data.descriptions]
    const { rows } = await db.query(query, values)
    return rows[0]
}

exports.destroy = async function (id) {
    const query = `
    DELETE FROM "${table}" WHERE "id"=$1 RETURNING *
  `
    const values = [id]
    const { rows } = await db.query(query, values)
    return rows[0]
}

exports.destroyByIdAndUserId = async function (id, createdBy) {
    const query = `
  DELETE FROM "${table}" WHERE "id"=$1 AND "createdBy" = $2 RETURNING *
`
    const values = [id, createdBy]
    const { rows } = await db.query(query, values)
    return rows[0]
}
