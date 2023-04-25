const profileModel = require("../models/profiles.model")

exports.updateProfile = async (req, res) => {
    const {id} = req.user
    const data = {
        ...req.body
    }
    if(req.file){
        data.picture = req.file.filename
    }
    const profile = await profileModel.updateByUserId(id, data)
    if(!profile){
        throw("update_profile_failed")
    }
    return res.json({
        success: true,
        message: "Profile Updated",
        results: profile
    })
}
