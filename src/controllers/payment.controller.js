const paymentModel = require("../models/payment.models")
const reservationsModels = require("../models/reservations.models")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.createPayment = async (request, response) => {
    try{
        const {id} = request.user
        if(!id){
            throw Error("id_not_found")
        }
        const reservationStatus = 1
        const data = {
            ...request.body,
            statusId: reservationStatus
        }
        const reservations = await reservationsModels.findOne(data.reservationsId)
        if(!reservations){
            throw Error("reservations_not_found!")
        }
        const payment = await paymentModel.findPaymentMethods(data.paymentMethodId)
        if(!payment){
            throw Error("event_not_found")
        }
        const updatePayment = await reservationsModels.update(data.reservationsId, data)
        return response.json({
            success: true,
            message: "Create Wishlists successfully",
            results : updatePayment
        })
    }catch(err){
        return erorrHandler(response, err)    
    }
} 

