const {AirplaneRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')
const {StatusCodes} = require('http-status-codes')
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplaneRepository.create(data)
    return response
    } catch (error) {
        if(error.name = 'sequelizeValidationError'){
            let explanation = []
            error.errors.array.forEach(err => {
                explanation.push(err.message);
            });

           throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
         throw new AppError('Cannot Create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAllAirplanes(){
    try {
        const response = await airplaneRepository.getAll();
        return response
    } catch (error) {
    throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try {
        const response = await airplaneRepository.get(id);
        return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested Airplane is Not found',error.statusCode);
        }
    throw new AppError('Cannot fetch data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested Airplane is Not found',error.statusCode);
        }
    throw new AppError('Cannot perform delete on airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirplane(id,data){
    try {
        const response = await airplaneRepository.update(id,data)
    return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested Airplane is Not found',error.statusCode);
        }

         throw new AppError('Cannot perform update on airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

module.exports ={
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}