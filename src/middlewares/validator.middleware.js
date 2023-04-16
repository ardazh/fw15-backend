const { body, validationResult } = require("express-validator")
// const errorHandler = require("../helpers/errorHandler.helper")

const formatEmail = body("email").isEmail().withMessage("Email is Invalid")
const strongPassword = body("password").isStrongPassword().withMessage("Password not strong")

const rules = {
    authLogin: [
        formatEmail,
        body("password").isLength({min: 1}).withMessage("Password is Invalid")
    ],
    createUser: [
        body("fullName").isLength({min: 3, max: 80}).withMessage("Name legth is invalid"),
        formatEmail,
        strongPassword
    ]
}

const validator = (request, response, next) => {
    const errors = validationResult(request)
    try{
        if(!errors.isEmpty()) { 
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
