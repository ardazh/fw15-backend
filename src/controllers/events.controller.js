const eventsModel = require("../models/events.models")
const cityModel = require("../models/city.models")
const fileremover = require("../helpers/fileRemover.helper")
const erorrHandler = require("../helpers/errorHandler.helper")
const deviceTokenModel = require("../models/deviceToken.model")
const admin = require("../helpers/firebase")


exports.getAllEvent = async (request, response) => {
    try {
        const data = await eventsModel.findAll(request.query)
        return response.json({
            success: true,
            message: "List of all Events",
            results: data
        })
    } catch (err) {
        return erorrHandler(response, err)
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
        return erorrHandler(response, err)
    }
}

//manage events
exports.getManageAllEvent = async (request, response) => {
    try {
        const { id } = request.user
        console.log(id)
        const data = await eventsModel.findAllManageEvents(id)
        return response.json({
            success: true,
            message: "List of all Manage Events",
            results: data
        })
    } catch (err) {
        return erorrHandler(response, err)
    }
}

exports.getManageDetailEvent = async (request, response) => {
    try {
        const { id } = request.user
        const data = await eventsModel.findDetailManageEvents(request.params.id, id)
        return response.json({
            success: true,
            message: "List of Detail Events",
            results: data
        })
    } catch (err) {
        return erorrHandler(response, err)
    }
}

exports.createManageEvent = async (request, response) => {
    try {
        const { id } = request.user
        const data = {
            ...request.body,
            createdBy: id
        }
        const newData = {
            ...data
        }
        if (request.file) {
            data.picture = request.file.filename
        }
        const cityId = await cityModel.findOne(data.cityId)
        if (!cityId) {
            throw Error("city_not_found")
        }
        const dataEvent = await eventsModel.createManageEvents(newData)
        if (!newData) {
            throw Error("failed_create_events")
        }
        const listToken = await deviceTokenModel.findAll(1,1000)
        const message = listToken.map(item => ({token: item.token, notification:{title:"there is new event", body:`${request.body.title} will be held at ${request.body.date}, check it out!` }}))
        const messaging = admin.messaging()
        messaging.sendEach(message)
        return response.json({
            success: true,
            message: "Create Events Successfully!",
            results: dataEvent
        })
    } catch (err) {
        fileremover(request.file)
        return erorrHandler(response, err)
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
            data.picture = request.file.filename
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
        return erorrHandler(response, err)
    }
}

exports.deleteManageEvent = async (request, response) => {
    try {
        const { id } = request.user
        const data = await eventsModel.destroyByIdAndUserId(request.params.id, id)
        if (!data) {
            return erorrHandler(response, undefined)
        }
        return response.json({
            success: true,
            message: "Delete Events successfully",
            results: data
        })
    } catch (err) {
        return erorrHandler(response, err)
    }
}
