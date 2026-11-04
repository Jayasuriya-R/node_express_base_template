const {CityRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')
const {StatusCodes} = require('http-status-codes')
const cityRepository = new CityRepository();


async function createCity(data){
    try {
        const response = await cityRepository.create(data)
    return response
    } catch (error) {
        if(error.name = 'sequelizeValidationError'){
            let explanation = []
            error.errors.array.forEach(err => {
                explanation.push(err.message);
            });

           throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
         throw new AppError('Cannot Create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }   
}

async function getAllCity(){
    try {
        const response = await cityRepository.getAll();
        return response
    } catch (error) {
    throw new AppError('Cannot fetch data of all the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try {
        const response = await cityRepository.get(id);
        return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested city is Not found',error.statusCode);
        }
    throw new AppError('Cannot fetch data of all the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested city is Not found',error.statusCode);
        }
    throw new AppError('Cannot perform delete on city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateCity(id,data){
    try {
        const response = await cityRepository.update(id,data)
    return response
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Requested city is Not found',error.statusCode);
        }

         throw new AppError('Cannot perform update on city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

module.exports = {
createCity,
getAllCity,
getCity,
deleteCity,
updateCity
}