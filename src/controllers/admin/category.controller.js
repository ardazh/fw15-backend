const categoryModel = require("../../models/category.models")
const erorrHandler = require("../../helpers/errorHandler.helper")
const argon = require("argon2")

exports.getAllCategory = async(request, response) => {
    try{
        const data = await categoryModel.findAll(
            request.query.page, 
            request.query.limit, 
            request.query.search,
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of all Categories",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getOneCatefory = async(request, response) => {
    const data = await categoryModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Categories",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createCategory = async (request, response) => {
    try{
        
        const hash = await argon.hash(request.body.password)
        const data = {
            ...request.body,
            password: hash
        }
        const category = await categoryModel.insert(data)
        return response.json({
            success: true,
            message: "Create Categories successfully",
            results : category
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

exports.updateCategory = async (request, response) => {
    try{
        const data = await categoryModel.update(request.params.id, request.body)
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
            message: "Update Categories successfully",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    } 
}

exports.deleteCategory = async (request, response) => {
    try{
        const data = await categoryModel.destroy(request.params.id)
        if(!data){
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete Categories successfully",
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
