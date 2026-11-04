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

async function getAllAirplanes(req,res){
   try {
      const response = await AirplaneService.getAllAirplanes()
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully fetched all the airplanes'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while fetching Airplanes'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function getAirplane(req,res){
   try {
      const response = await AirplaneService.getAirplane(req.params.id)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully fetched the airplane'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while fetching Airplane'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function deleteAirplane(req,res){
   try {
      const response = await AirplaneService.deleteAirplane(req.params.id)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully deleted the airplane'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while deleting the Airplane'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function updateAirplane(req,res){
   try {
      let id = req.params.id;
      let data = req.body
      const response = await AirplaneService.updateAirplane(id,data)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully updated the airplane'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while updating the Airplane'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}
module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}