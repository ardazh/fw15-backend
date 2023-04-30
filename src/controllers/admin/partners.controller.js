const partnersModel = require("../../models/partners.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllEventPartners = async(request, response) => {
    try{
        const data = await partnersModel.findAll(
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

exports.getOneEventPartners = async(request, response) => {
    const data = await partnersModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Partners",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createEventPartners = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const partners = await partnersModel.insert(data)
        return response.json({
            success: true,
            message: "Create Partners successfully",
            results : partners
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateEventPartners = async (request, response) => {
    try{
        const data = await partnersModel.update(request.params.id, request.body)
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

exports.deleteEventPartners = async (request, response) => {
    try{
        const data = await partnersModel.destroy(request.params.id)
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
