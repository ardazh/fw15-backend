const userModel = require("../models/users.model")
const errorHandler = require("../helpers/errorHandler.helper")
const argon = require("argon2")

const changePassword = async (request, response) => {
    try{
        const {id} = request.user
        const {oldPassword, newPassword, confirmPassword} = request.body
        const user = await userModel.findOne(id)
        const verify = await argon.verify(user.password, oldPassword)
        if(!verify){
            throw Error("wrong_password")
        }
        if(newPassword !== confirmPassword){
            throw Error("password_unmatch")
        }
        await userModel.update(id, {
            password: await argon.hash(newPassword)
        })
        return response.json({
            success: true,
            message: "Password Updated!"
        })
    }catch(err){
        errorHandler(response, err)
    }
}

module.exports = changePassword
