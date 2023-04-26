const db = require("../helpers/db.helper")
const table = "categories"

exports.findCategory = async function(sort, sortBy){
    sort = sort || "id"
    sortBy = sortBy || "ASC"

    const query = `
  SELECT * FROM "${table}" 
  ORDER BY "${sort}" ${sortBy} 
  LIMIT 6
  `

    const {rows} = await db.query(query)
    return rows
}
