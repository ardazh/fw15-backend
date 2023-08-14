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

exports.findAllBySearch = async (params) => {
    params.page = parseInt(params.page) || 1
    params.limit = parseInt(params.limit) || 7
    params.search = params.search || ""
    params.sort = params.sort || "id"
    params.sortBy = params.sortBy || "ASC"
    params.category = params.category || ""
    params.city = params.city || ""

    const offset = (params.page - 1) * params.limit

    const countQuery = `
  SELECT COUNT(*)::INTEGER
  FROM "${table}"
  WHERE "title" ILIKE $1`

    const countvalues = [`%${params.search}%`]
    const { rows: countRows } = await db.query(countQuery, countvalues)

    const query = `
  SELECT
  "${table}"."id",
  "${table}"."picture",
  "${table}"."title",
  "${table}"."date",
  "categories"."name" as "category",
  "cities"."name" as "location"
  FROM "${table}"
  JOIN "eventCategories" ON "${table}"."id" = "eventCategories"."eventId"
  JOIN "categories" ON "categories"."id" = "eventCategories"."categoryId"
  JOIN "cities" ON "cities"."id" = "${table}"."cityId"
  WHERE "${table}"."title" ILIKE $3 
  AND "categories"."name" ILIKE $4
  AND "cities"."name" ILIKE $5
  ORDER BY ${params.sort} ${params.sortBy}
  LIMIT $1 OFFSET $2
  `
    const values = [params.limit, offset, `%${params.search}%`, `%${params.category}%`, `%${params.city}%`]
    const { rows } = await db.query(query, values)
    return {
        rows,
        pageInfo: {
            totalData: countRows[0].count,
            page: params.page,
            limit: params.limit,
            totalPage: Math.ceil(countRows[0].count / params.limit),
        },
    }
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
exports.insert = async(data)=>{
    const queries = `
  INSERT INTO "${table}" (
    "picture",
    "title",
    "date",
    "cityId",
    "descriptions",
    "createdBy"
    )
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `
    const values = [
        data.picture,
        data.title,
        data.date,
        data.cityId,
        data.descriptions,
        data.createdBy
    ]
    const {rows} = await db.query(queries, values)
    return rows[0]
}

exports.findDetailManageEvents = async function (id, userId) {
    const query = `
    SELECT
    "e"."id",
    "e"."picture",
    "e"."title",
    "c"."name" AS "location",
    "e"."date",
    "e"."descriptions",
    "cat"."name" AS "eventCategory"
    FROM "events" "e"
    JOIN "cities" "c" ON "c"."id" = "e"."cityId"
    JOIN "eventCategories" "ec" ON "ec"."eventId" = "e"."id"
    JOIN "categories" "cat" ON "cat"."id" = "ec"."categoryId"
    WHERE "e"."id" = $1 AND "e"."createdBy" = $2
  `
    console.log(query)
    const values = [id, userId]
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

exports.findEventByUserCreated = async(id, page, limit, sort, sortBy) => {
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5
    sort = sort || "id"
    sortBy = sortBy || "ASC"
    const offset = (page - 1) * limit
    const query = `
  SELECT
  "e"."id",
  "e"."title",
  "c"."name" AS "location",
  "e"."date",
  "e"."descriptions"
  FROM "events" "e"
  JOIN "cities" "c" ON "c"."id" = "e"."cityId"
  WHERE "e"."createdBy" = $1
  ORDER BY "${sort}" ${sortBy} LIMIT $2 OFFSET $3
  `  
    const values = [id, limit, offset]
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
