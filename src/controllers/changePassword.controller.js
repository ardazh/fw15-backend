const userModel = require("../models/users.model")
const errorHandler = require("../helpers/errorHandler.helper")
const argon = require("argon2")

exports.changePassword = async (request, response) => {
    try{
        const {id} = request.user
        const user = await userModel.findOne(id)
        const {oldPassword: password, newPassword} = request.body

        if(!user){
            throw Error("user_not_found")
        }
        
        const verify = await argon.verify(user.password, password)
        if(!verify){
            throw Error("password_unmatch")
        }

        const hash = await argon.hash(newPassword)
        const data = {
            password: hash
        }
        
        const changePass = await userModel.update(id, data)
        if(!changePass){
            throw Error("change_password_failed")
        }
        return response.json({
            success: true,
            message: "Password Updated!"
        })
    }catch(err){
        errorHandler(response, err)
    }
}
