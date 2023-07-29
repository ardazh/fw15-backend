const erorrHandler = require("../helpers/errorHandler.helper")
const reservationSectionsModel = require("../models/reservationSections.models")

exports.getAllReservationSections = async(req, res) => {
    try{
        const data = await reservationSectionsModel.findAll(
            req.query.page,
            req.query.limit,
            req.query.search,
            req.query.sort,
            req.query.sortBy,
        )
        return res.json({
            success: true,
            message: "list of all reservations sections",
            results: data
        })
    }catch(err){
        return erorrHandler(res, err)
    }
}
