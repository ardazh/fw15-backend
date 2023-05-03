const reservationsModel = require("../models/reservations.models")
const reservationTicketsModel = require("../models/reservationTickets.models")
const reservationSectionsModel = require("../models/reservationSections.models")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.createReservations = async (request, response) => {
    try{
        const {id} = request.user
        const status = 1
        const paymentMethod = 2

        const sections = await reservationSectionsModel.findOne(request.body.sectionId)
        if(!sections){
            throw Error("sections_not_found")
        }
        const data = {
            ...request.body,
            userId: id,
            statusId: status,
            paymentMethodId: paymentMethod
        }

        const reservations = await reservationsModel.insert(data)
        if(!reservations){
            throw Error("cannot_create_reservations")
        }
        const tickets = {
            ...request.body,
            reservationsId: reservations.id
        }

        const reservationsTickets = await reservationTicketsModel.insert(tickets)
        const section = reservationsTickets.sectionId
        const quantity = reservationsTickets.quantity

        const sectionName = await reservationSectionsModel.findOne(section)
        const seats = sectionName.name
        const price = sectionName.price
        const totalPayment = "Rp" + parseInt(price) * parseInt(quantity)

        const reservationsResults = {
            seats,
            quantity,
            totalPayment
        }
        return response.json({
            success: true,
            message: "Create Reservations successfully",
            results : reservationsResults
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

