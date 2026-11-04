
const {logger} = require('../config');
const {StatusCodes}=require('http-status-codes')
const AppError = require('../utils/errors/app-error');

class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response
        } catch (error) {
            logger.error('Something went wrong in the Crud Repo:create');
            throw error;
        }
    }

     async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!response){
                throw new AppError("Requested resource not found",StatusCodes.NOT_FOUND)
            }
            return response
        } catch (error) {
            logger.error('Something went wrong in the Crud Repo:destroy');
            throw error;
        }
    }

     async get(data){
        try {
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("Requested resource not found",StatusCodes.NOT_FOUND)
            }
            return response
        } catch (error) {
            logger.error('Something went wrong in the Crud Repo:get');
            throw error;
        }
    }

     async getAll(){
        try {
            const response = await this.model.findAll();
            return response
        } catch (error) {
            logger.error('Something went wrong in the Crud Repo:getAll');
            throw error;
        }
    }
    
     async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            if(response[0] === 0){
                throw new AppError("Requested resource not found",StatusCodes.NOT_FOUND)
            }
            return response
        } catch (error) {
            logger.error('Something went wrong in the Crud Repo:update');
            throw error;
        }
    }
}

module.exports = CrudRepository;