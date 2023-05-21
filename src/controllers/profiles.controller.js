const profileModel = require("../models/profiles.model")
const fileRemover = require("../helpers/fileRemover.helper")
const erorrHandler = require("../helpers/errorHandler.helper")

exports.updateProfile = async (req, res) => {
    try {
        const { id } = req.user
        const user = await profileModel.findOneByUserId(id)
        const data = {
            ...req.body
        }
        if (req.file) {
            if (user.picture) {
                fileRemover({ filename: user.picture })
            }
            data.picture = req.file.path

            // data.picture = req.file.filename
        }
        const profile = await profileModel.updateByUserId(id, data)
        if (!profile) {
            throw ("update_profile_failed")
        }
        return res.json({
            success: true,
            message: "Profile Updated",
            results: profile
        })
    } catch (err) {
        return erorrHandler(res, err)
    }
}

exports.getProfile = async (req, res) => {
    try {
        const { id } = req.user
        const profile = await profileModel.findOneByUserId(id)
        if (!profile) {
            throw Error("profile_not_found")
        }
        return res.json({
            success: true,
            message: "Profile",
            results: profile
        })
    } catch (err) {
        return erorrHandler(res, err)
    }
}
