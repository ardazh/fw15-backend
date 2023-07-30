const reservationsModels = require("../models/reservations.models")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.getHistory = async(request, response) => {
    try{
        const {id} = request.user
        if(!id){
            throw Error("unauthorized")
        }
        const {page, limit, sort, sortBy} = request.query
        const data = await reservationsModels.findHistoryByUserId(id, page, limit, sort, sortBy)
        if(!data){
            throw Error("data_not_found")
        }

        const countMyHistory = await reservationsModels.countHistory(id)
        const totalPage = Math.ceil(parseInt(countMyHistory.totalData)/parseInt(limit || 5))
        console.log(totalPage)
        return response.json({
            success: true,
            message: "List of all Hostory",
            results: data,
            totalPage: totalPage
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
