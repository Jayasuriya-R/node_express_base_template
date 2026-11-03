const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')
const AppError = require('../utils/errors/app-error')
function validateCreateAirplane(req,res,next){
    ErrorResponse.error =  new AppError(['modelNumber is not found or not valid in the incoming request'],StatusCodes.BAD_REQUEST)
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = { validateCreateAirplane}