const categoryModel = require("../models/category.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getCategory = async(request, response) => {
    try{
        const data = await categoryModel.findCategory(
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of Category",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
