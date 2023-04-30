const eventCategoryModel = require("../../models/eventcategory.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllEventCategory = async(request, response) => {
    try{
        const data = await eventCategoryModel.findAll(
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

exports.getOneEventCategory = async(request, response) => {
    const data = await eventCategoryModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Events",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createEventCategory = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const eventCategory = await eventCategoryModel.insert(data)
        return response.json({
            success: true,
            message: "Create Events successfully",
            results : eventCategory
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateEventCategory = async (request, response) => {
    try{
        const data = await eventCategoryModel.update(request.params.id, request.body)
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

exports.deleteEventCategory = async (request, response) => {
    try{
        const data = await eventCategoryModel.destroy(request.params.id)
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
