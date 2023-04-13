const erorrHandler = (response, err) => {
    if(err?.message?.includes("duplicate key")){
        return response.status(409).json({
            success: false,
            message: "Error: email already used"
        })
    }
    if(err?.message?.includes("jwt malformed")){
        return response.status(401).json({
            success: false,
            message: "Token is invalid!"
        })
    }
    if(err?.message?.includes("invalid signature")){
        return response.status(401).json({
            success: false,
            message: "Token signature is invalid!"
        })
    }
    if(err === undefined){
        return response.status(404).json({
            success: false,
            message: "Error user not found",
        })
    }
    if(err?.message?.includes("name_empty_field")){
        return response.json({
            success: false,
            message: "Name cannot be empty"
        })
    }
    if(err?.message?.includes("empty_field")){
        return response.json({
            success: false,
            message: "Email or Password cannot be empty"
        })
    }
    if(err?.message?.includes("email_format")){
        return response.json({
            success: false,
            message: "Wrong email format, use @"
        })
    }
    if(err?.message?.includes("wrong_credentials")){
        return response.status(401).json({
            success: false,
            message: "Wrong Email or Password"
        })
    }
    if(err?.message?.includes("unauthorized")){
        return response.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    console.log(err)
    return response.status(500).json({
        success: false,
        message: "Error: internal server error"
    })
}

module.exports = erorrHandler
