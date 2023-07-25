const reservationsModel = require("../models/reservations.models")
const reservationTicketsModel = require("../models/reservationTickets.models")
const reservationSectionsModel = require("../models/reservationSections.models")
const eventModel = require("../models/events.models")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.createReservations = async (request, response) => {
    try{
        const {id} = request.user
        if(!id){
            throw Error("unauthorized")
        }
        const status = 1
        const paymentMethod = 2

        
        const data = {
            ...request.body,
            userId: id,
            statusId: status,
            paymentMethodId: paymentMethod
        }

        if(data.eventId){
            const event = await eventModel.findOne(data.eventId)
            if(!event){
                throw Error("event_not_found")
            }
        }

        const reservationsTickets = await reservationsModel.insert(data)

        const reservations = reservationsTickets.id
        const section = request.body.sectionId
        const quantity = request.body.quantity

        const ticketSection = await reservationSectionsModel.findOne(section)
        const dataTickets = {
            reservations,
            section,
            quantity
        }

        await reservationTicketsModel.insert(dataTickets)

        // if(!reservations){
        //     throw Error("cannot_create_reservations")
        // }
        // const tickets = {
        //     ...request.body,
        //     reservationsId: reservations.id
        // }

        // const sectionName = await reservationSectionsModel.findOne(section)
        // const seats = sectionName.name
        // const price = sectionName.price
        // const totalPayment = "Rp" + parseInt(price) * parseInt(quantity)

        // const reservationsResults = {
        //     seats,
        //     quantity,
        //     totalPayment
        // }
        return response.json({
            success: true,
            message: "Create Reservations successfully",
            results : {
                id: reservations.id,
                events: await eventModel.findOneById(request.body.eventId),
                sectionName: ticketSection.name,
                quantity: quantity,
                pricePerTicket: ticketSection.price,
                totalPrice: parseInt(quantity) * parseInt(ticketSection.price)
            }
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
}

