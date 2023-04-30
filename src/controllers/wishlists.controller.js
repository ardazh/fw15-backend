const wishlistsModel = require("../models/wishlists.models")
const eventsModel = require("../models/events.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getWishlists = async(request, response) => {
    try{
        const {id} = request.user
        const data = await wishlistsModel.findWishlists(id)
        
        return response.json({
            success: true,
            message: "List of Wishlists",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

exports.createWishlists = async (request, response) => {
    try{
        const {id} = request.user
        const data = {
            ...request.body,
            userId: id
        }
        const event = await eventsModel.findOne(data.eventId)
        if(!event){
            throw Error("event_not_found")
        }
        const profile = await wishlistsModel.insert(data)
        return response.json({
            success: true,
            message: "Create Wishlists successfully",
            results : profile
        })
    }catch(err){
        // fileRemover(request.file)
        return erorrHandler(response, err)    
    }
}
