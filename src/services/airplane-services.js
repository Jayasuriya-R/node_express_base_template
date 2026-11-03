const {AirplaneRepository} = require('../repositories')
const {AppError} = require('../utils/errors/app-error')
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

module.exports ={
    createAirplane : createAirplane
}