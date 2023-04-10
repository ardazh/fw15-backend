const erorrHandler = (response, err) => {
    if(err?.message?.includes("duplicate key")){
        return response.status(409).json({
            success: false,
            message: "Error: email already used"
        })
    }
    if(err === undefined){
        return response.status(404).json({
            success: false,
            message: "Error user not found",
        })
    }
    return response.status(500).json({
        success: false,
        message: "Error: internal server error"
    })
}

module.exports = erorrHandler
