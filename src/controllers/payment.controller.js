const paymentModel = require("../models/payment.models")
const reservationsModels = require("../models/reservations.models")
const reservationTickets = require("../models/reservationTickets.models")
const errorHandler = require("../helpers/errorHandler.helper")

exports.createPayment = async (request, response) => {
    try{
        const {id} = request.user
        if(!id){
            throw Error("id_not_found")
        }
        const status = 1
        const data = {
            ...request.body,
            statusId: status
        }
        const reservations = await reservationsModels.findOne(data.reservationId)
        if(!reservations){
            throw Error("reservations_not_found!")
        }
        const paymentMethod = await paymentModel.findPaymentMethods(data.paymentMethodId)
        if(!paymentMethod){
            throw Error("payment_not_found")
        }
        const payment = await reservationsModels.update(data.reservationId, data)
        if(!payment){
            throw Error("update_payment_failed")
        }
        const ticketInfo = await reservationTickets.getTicketInfo(data.reservationId)
        if(!ticketInfo){
            throw Error("ticket_info_not_found")
        }
        const price = parseInt(ticketInfo.price)
        const quantity = parseInt(ticketInfo.quantity)
        const totalPayment = price * quantity

        const updatePayment = {
            ...ticketInfo,
            totalPayment
        }
        return response.json({
            success: true,
            message: "Payment Successfully",
            results : updatePayment
        })
    }catch(err){
        return errorHandler(response, err)    
    }
}


