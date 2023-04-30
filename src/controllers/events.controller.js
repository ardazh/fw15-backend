const eventsModel = require("../models/events.models")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.getEvent = async(request, response) => {
    try{
        const {id} = request.body 
        const data = await eventsModel.findOneById(id)
        return response.json({
            success: true,
            message: "List of Events",
            results: data
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}

// exports.getAllEvent = async(request, response) => {
//     try{
//         const data = await eventsModel.findAll(
//             request.query.page, 
//             request.query.limit, 
//             request.query.search,
//             request.query.sort, request.query.sortBy)
      
//         return response.json({
//             success: true,
//             message: "List of all City",
//             results: data
//         })
//     }catch(err){
//         return erorrHandler(response, err)
//     }
// }
