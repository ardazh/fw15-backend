const profileModel = require("../../models/profiles.model")
const erorrHandler = require("../../helpers/errorHandler.helper")
// const fileRemover = require("../")


exports.getAllProfiles = async(request, response) => {
    try{
        const data = await profileModel.findAll(
            request.query.page, 
            request.query.limit, 
            request.query.search,
            request.query.sort, request.query.sortBy)
        
        return response.json({
            success: true,
            message: "List of all profiles",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.getOneProfile = async(request, response) => {
    const data = await profileModel.findOne(request.params.id)
    if(data){
        return response.json({
            success: true,
            message: "Detail Profile",
            results: data
        })
    }
    return erorrHandler(response, data)
}

exports.createProfile = async (request, response) => {
    try{
        const data = {
            ...request.body
        }
        if(request.file){
            data.picture = request.file.filename
        }
        const profile = await profileModel.insert(data)
        return response.json({
            success: true,
            message: "Create Profile successfully",
            results : profile
        })
    }catch(err){
        // fileRemover(request.file)
        return erorrHandler(response, err)    
    }
}

exports.updateProfile = async (request, response) => {
    try{
        // if(request.file){
        //     data.picture = request.file.filename
        // }
        const profile = await profileModel.update(request.params.id, request.body)
        if(!profile){
            return erorrHandler(response, undefined)
            // throw Error(("Update_profile_failed"))
        }
        return response.json({
            success: true,
            message: "Update Profile successfully",
            results: profile
        })
    }catch(err){
        // fileRemover(request.file)
        return erorrHandler(response, err)
    } 
}

exports.deleteProfile = async (request, response) => {
    try{
        const data = await profileModel.destroy(request.params.id)
        if(!data){
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete Profile successfully",
            results : data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
