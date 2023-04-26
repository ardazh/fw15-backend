const partnersModel = require("../models/partners.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getPartners = async(request, response) => {
    try{
        const data = await partnersModel.findPartners(
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of Partners",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
