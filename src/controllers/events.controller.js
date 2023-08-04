const eventsModel = require("../models/events.models")
const cityModel = require("../models/city.models")
const eventCategories = require("../models/eventsCategory.models")
const fileremover = require("../helpers/fileRemover.helper")
const errorHandler = require("../helpers/errorHandler.helper")
const deviceTokenModel = require("../models/deviceToken.model")
const admin = require("../helpers/firebase")

// const cloudinary = require("cloudinary").v4
// cloudinary.config({
//     cloud_name: "dxs0yxeyr",
//     api_key: "236157336681252",
//     api_secret: "V2uHsegpJtBpFlUl3WSwkxdCL0I"
// })

exports.getAllEvent = async (request, response) => {
    try {
        const data = await eventsModel.findAll(request.query)
        return response.json({
            success: true,
            message: "List of all Events",
            results: data
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}

exports.getEvent = async (request, response) => {
    try {
        const id = request.params.id
        const data = await eventsModel.findOneById(id)
        return response.json({
            success: true,
            message: "List of Events",
            results: data
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}

//manage events
exports.getManageAllEvent = async (request, response) => {
    try {
        const { id } = request.user
        if(!id){
            throw Error("unauthorized")
        }
        const {page, limit, sort, sortBy} = request.query
        const data = await eventsModel.findEventByUserCreated(id, page, limit, sort, sortBy)
        const countEvent = await eventsModel.countEvent(id)
        const totalPage = Math.ceil(parseInt(countEvent.totalData)/parseInt(limit))

        if(!data){
            throw Error("data_not_found")
        }
        return response.json({
            success: true,
            message: "List Events Create By User",
            results: data,
            totalPage: totalPage
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}

exports.getManageDetailEvent = async (request, response) => {
    try {
        const { id } = request.user
        const data = await eventsModel.findDetailManageEvents(request.params.id, id)
        if(!data){
            throw Error("data_not_found")
        }
        return response.json({
            success: true,
            message: "List of Manage Detail Events",
            results: data
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}

exports.createManageEvent = async (request, response) => {
    try {
        const { id } = request.user
        const data = {
            ...request.body,
            createdBy: id
        }
        if (request.file) {
            data.picture = request.file.path
        }
        
        const cityId = await cityModel.findOne(data.cityId)
        if (!cityId) {
            throw Error("city_not_found")
        }
        
        // const dataEvent = await eventsModel.createManageEvents(data)
        // if (!dataEvent) {
        //     throw Error("failed_create_events")
        // }

        const event = await eventsModel.insert(data)
        const eventCategoriesData = {
            eventId: event.id,
            categoryId: data.categoryId
        }
        await eventCategories.insert(eventCategoriesData)

        const listToken = await deviceTokenModel.findAll(1,1000)
        const message = listToken.map(item => ({token: item.token, notification:{title:"there is new event", body:`${request.body.title} will be held at ${request.body.date}, check it out!` }}))
        const messaging = admin.messaging()
        messaging.sendEach(message)
        return response.json({
            success: true,
            message: "Create Events Successfully!",
            results: event
        })
    } catch (err) {
        fileremover(request.file)
        return errorHandler(response, err)
    }
}

exports.updateManageEvent = async (request, response) => {
    try {
        const cityId = await cityModel.findOne(request.body.cityId)
        if (!cityId) {
            throw Error("cityId_not_found!")
        }
        const data = {
            ...request.body
        }

        if (request.file) {
            data.picture = request.file.path
            // data.picture = request.file.filename

        }
        const Events = await eventsModel.updateManageEvents(request.params.id, data)
        if (Events) {
            return response.json({
                succes: true,
                message: "Update events succesfully",
                results: Events
            })
        }
        throw Error("update_event_failed")
    } catch (err) {
        fileremover(request.file)
        return errorHandler(response, err)
    }
}

exports.deleteManageEvent = async (request, response) => {
    try {
        const {id} = request.user
        if(!id){
            throw Error("unauthorized")
        }
        const findUser = await eventsModel.findOne(request.params.id)
        if(!findUser){
            throw Error("data_not_found")
        }

        if(id !== findUser.createdBy){
            throw Error("data_event_not_created_by_you")
        }

        const data = await eventsModel.destroy(request.params.id)
        if(!data){
            throw Error("data_not_found")
        }
        await eventCategories.deleteByEventId(findUser.id)
        return response.json({
            success: true,
            message: "Delete event successfully",
            results:data
        })
    }catch (err) {
        return errorHandler(response, err)
    }
}
