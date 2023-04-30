const reservationSectionsModel = require("../../models/reservationSections.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllEventReservationSections = async(request, response) => {
    try{
        const data = await reservationSectionsModel.findAll(
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

exports.getOneEventReservationSections = async(request, response) => {
    const data = await reservationSectionsModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Partners",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createEventReservationSections = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const reservationSections = await reservationSectionsModel.insert(data) //perlu di ganti apa??
        return response.json({
            success: true,
            message: "Create Partners successfully",
            results : reservationSections //perlu di ganti apa??
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateEventReservationSections = async (request, response) => {
    try{
        const data = await reservationSectionsModel.update(request.params.id, request.body)
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

exports.deleteEventReservationSections = async (request, response) => {
    try{
        const data = await reservationSectionsModel.destroy(request.params.id)
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
