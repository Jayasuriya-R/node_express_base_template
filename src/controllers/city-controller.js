const {CityServices} = require('../services')
const {StatusCodes} =  require('http-status-codes')
const {ErrorResponse} = require('../utils/common')
const {SuccessResponse} = require('../utils/common')

async function createCity(req,res){
   try {
     const response = await CityServices.createCity({
        name: req.body.name,
     })
     SuccessResponse.data = response;
     SuccessResponse.message = 'Successfully created City'
     return res.status(StatusCodes.CREATED).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while creating City'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function getAllCity(req,res){
   try {
      const response = await CityServices.getAllCity()
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully fetched all the city'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while fetching City'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function getCity(req,res){
   try {
      const response = await CityServices.getCity(req.params.id)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully fetched the city'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while fetching city'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function deleteCity(req,res){
   try {
      const response = await CityServices.deleteCity(req.params.id)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully deleted the city'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while deleting the city'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}

async function updateCity(req,res){
   try {
      let id = req.params.id;
      let data = req.body
      const response = await CityServices.updateCity(id,data)
      SuccessResponse.data = response;
      SuccessResponse.message = 'Successfully updated the city'
      return res.status(StatusCodes.OK).json(SuccessResponse)
   } catch (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = 'Something went wrong while updating the City'
     return res.status(error.statusCode).json(ErrorResponse)
   }
}


module.exports = {
    createCity,
    getAllCity,
    getCity,
    deleteCity,
    updateCity
}