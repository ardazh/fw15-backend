const reservationTicketsModel = require("../../models/reservationTickets.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllEventReservationTickets = async(request, response) => {
    try{
        const data = await reservationTicketsModel.findAll(
            request.query.page, 
            request.query.limit, 
            request.query.search,
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of all Partners",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getOneEventReservationTickets = async(request, response) => {
    const data = await reservationTicketsModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Partners",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createEventReservationTickets = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const reservationTickets = await reservationTicketsModel.insert(data) //perlu di ganti apa??
        return response.json({
            success: true,
            message: "Create Partners successfully",
            results : reservationTickets //perlu di ganti apa??
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateEventReservationTickets = async (request, response) => {
    try{
        const data = await reservationTicketsModel.update(request.params.id, request.body)
        if(!data){
            return erorrHandler(response, undefined)
        }
        if(request.body.email == "" || request.body.password == ""){
            throw Error("empty_field")
        }
        if(!request.body.email.includes("@")){
            throw Error("email_format")
        }
        return response.json({
            success: true,
            message: "Update Partners successfully",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    } 
}

exports.deleteEventReservationTickets = async (request, response) => {
    try{
        const data = await reservationTicketsModel.destroy(request.params.id)
        if(!data){
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete Partners successfully",
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
