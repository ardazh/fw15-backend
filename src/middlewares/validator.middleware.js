const { body, query, param, validationResult } = require("express-validator")
// const errorHandler = require("../helpers/errorHandler.helper")
const fs = require("fs")

const formatEmail = body("email").isEmail().withMessage("Email is Invalid")
const strongPassword = body("password").isStrongPassword().withMessage("Password not strong")

const rules = {
    authLogin: [
        formatEmail,
        body("password").isLength({min: 1}).withMessage("Password is Invalid")
    ],
    createUser: [
        formatEmail,
        strongPassword
    ],
    getAllUsers: [
        query("sortBy").toUpperCase().isIn(["ASC", "DESC"]).withMessage("Sort type is invalid")
    ],
    idParams: [
        param("id").isNumeric().withMessage("ID is invalid"). 
            isInt({min: 1}).withMessage("ID have to be more than 0")
    ]
}

const validator = (request, response, next) => {
    const errors = validationResult(request)
    try{
        if(!errors.isEmpty()) {
            if(request.file){
                const filename = `uploads/${request.file.filename}`
                fs.unlink(filename, (err) => {
                    if(err){
                        throw Error(err.message)
                    }
                })
            } 
            throw Error("validation")
        }
        return next()
    }catch(err){
        return response.status(400).json({ 
            success: false,
            message: "validation error",
            results: errors.array()
        })
        // return errorHandler(response, err)
    }
}

const validate = (selectedRules) => [rules[selectedRules], validator]

module.exports = validate
