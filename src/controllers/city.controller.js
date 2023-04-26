const cityModel = require("../models/city.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getCity = async(request, response) => {
    try{
        const data = await cityModel.findCity(
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of City",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getAllCity = async(request, response) => {
    try{
        const data = await cityModel.findAll(
            request.query.page, 
            request.query.limit, 
            request.query.search,
            request.query.sort, request.query.sortBy)
      
        return response.json({
            success: true,
            message: "List of all City",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
