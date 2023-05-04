const reservationsModels = require("../models/reservations.models")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.getHistory = async(request, response) => {
    try{
        const {id} = request.user
        const data = await reservationsModels.findHistory(id)
        return response.json({
            success: true,
            message: "List of all Hostory",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getDetailHistory = async(request, response) => {
    try{
        const {id} = request.user
        const data = await reservationsModels.findDetailHistory(request.params.id, id)
        return response.json({
            success: true,
            message: "List of all Detail Hostory",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
