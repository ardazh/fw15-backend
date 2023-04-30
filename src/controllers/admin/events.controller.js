const eventsModel = require("../../models/events.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllEvents = async(request, response) => {
    try{
        const data = await eventsModel.findAll(
            request.query.page, 
            request.query.limit, 
            request.query.search,
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of all Events",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getOneEvents = async(request, response) => {
    const data = await eventsModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Events",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createEvents = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const events = await eventsModel.insert(data)
        return response.json({
            success: true,
            message: "Create Events successfully",
            results : events
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateEvents = async (request, response) => {
    try{
        const data = await eventsModel.update(request.params.id, request.body)
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
            message: "Update Events successfully",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    } 
}

exports.deleteEvents = async (request, response) => {
    try{
        const data = await eventsModel.destroy(request.params.id)
        if(!data){
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete Events successfully",
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
