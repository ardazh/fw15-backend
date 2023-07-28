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
        const event = await eventsModel.findOneById(data.eventId)
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

exports.checkWishlist = async (request, response) => {

    const {id} = request.user

    const event = request.query
    // return console.log(event)
    const eventId = event.eventId

    console.log(request.body)

    const checkWislist = await wishlistsModel.findOneByUserIdAndEventId(id, eventId)
    // return console.log(checkWislist)
    if(!checkWislist){
        return response.json({
            success: false,
            message: `wishlist event ${eventId} by for user ${id} not found`,
            results: false
        })
    }
    return response.json({
        success: true,
        message: `wishlist event ${eventId} by for user ${id} found`,
        results: true
    })

}

exports.deleteWishlists = async (request, response) => {
    try{
        const {id} = request.user

        const data = await wishlistsModel.destroyByIdAndUserId(request.params.id, id)
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
