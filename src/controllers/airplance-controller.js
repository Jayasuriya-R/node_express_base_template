const {AirplaneService} = require('../services')
const {StatusCodes} =  require('http-status-codes')
const {ErrorResponse} = require('../utils/common')
const {SuccessResponse} = require('../utils/common')

async function createAirplane(req,res){
   try {
     const response = await AirplaneService.createAirplane({
        modelNumber: req.body.modelNumber,
        capacity:req.body.capacity
     })
     SuccessResponse.data = response;
     SuccessResponse.message = 'Successfully created Airplanes'
     return res.status(StatusCodes.CREATED).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while creating Airplanes'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

module.exports = {
    createAirplane
}