const categoryModel = require("../models/category.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getAllCategory = async(request, response) => {
    try{
        const data = await categoryModel.findAllCategory(request.query)
        return response.json({
            success: true,
            message: "List of All Category",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
