const userModel = require("../models/users.model")
const erorrHandler = require("../helpers/errorHandler.helper")


exports.login = async (request, response) => {
    try{
        const {email, password} = request.body
        const user = await userModel.findOneByEmail(email)
        if(!user || (password !== user?.password)){
            throw Error("wrong_credentials")
        }
        return response.json({
            success: true,
            message: "Login Success!"
        })
    }catch(err){
        return erorrHandler(response, err)
    }
}
