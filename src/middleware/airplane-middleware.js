const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')
const AppError = require('../utils/errors/app-error')

function validateCreateAirplane(req,res,next){
    const incommingFields = Object.keys(req.body)
    ErrorResponse.error =  new AppError(['No data found in the incoming request'],StatusCodes.BAD_REQUEST)
    if(incommingFields.length === 0){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    ErrorResponse.error =  new AppError(['modelNumber is not found or not valid in the incoming request'],StatusCodes.BAD_REQUEST)
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

function updateAirplane(req,res,next){
    const validFields = ['modelNumber','capacity']
    const incommingFields = Object.keys(req.body)

    if(incommingFields.length === 0){
      ErrorResponse.error =  new AppError(['No data found in the incoming request'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    const inValidFields = incommingFields.filter(field => !validFields.includes(field))
    
    if(inValidFields.length >0){
        ErrorResponse.error =  new AppError([`Invalid fields: ${inValidFields.join(', ')}`],StatusCodes.BAD_REQUEST)
       return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = { validateCreateAirplane,updateAirplane}