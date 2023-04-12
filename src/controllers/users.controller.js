const userModel = require("../models/users.model")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.getAllUsers = async(request, response) => {

    const data = await userModel.findAll(request.query.page, request.query.limit)
    return response.json({
        success: true,
        message: "List of all users",
        results: data
    })
}

exports.getOneUser = async(request, response) => {
    const data = await userModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail User",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createUser = async (request, response) => {
    try{
        if(!request.body.fullName){
            throw Error("name_empty_field")
        }
        if(request.body.email == "" || request.body.password == ""){
            throw Error("empty_field")
        }
        if(!request.body.email.includes("@")){
            throw Error("email_format")
        }
        const data = await userModel.insert(request.body)
        return response.json({
            success: true,
            message: `Create user ${request.body.email} successfully`,
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

// exports.createUser = (request, response) => {
//     userModel.insert(request.body).then(data => {
//         return response.json({
//             success: true,
//             message: "Create user success",
//             results: data
//         })
//     }).catch(err => {
//         return erorrHandler(response, err)
//     })
// }

exports.updateUser = async (request, response) => {
    try{
        const data = await userModel.update(request.params.id, request.body)
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
            message: "Update user successfully",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    } 
}

exports.deleteUser = async (request, response) => {
    try{
        const data = await userModel.destroy(request.params.id)
        if(!data){
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete user successfully",
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
