const express = require('express')

const router = express.Router()

const {CityController} = require('../../controllers')
const {CityMiddleware} = require('../../middleware')

// /api/v1/airplanes POST
router.post('/',CityMiddleware.validateCreateCity,CityController.createCity)

// /api/v1/airplanes GET
router.get('/',CityController.getAllCity)

// /api/v1/airplanes/:id GET
router.get('/:id',CityController.getCity)

// /api/v1/airplanes/:id DELETE
router.delete('/:id',CityController.deleteCity)


// /api/v1/airplanes/:id PATCH
router.patch('/:id',CityMiddleware.validateUpdateCity,CityController.updateCity)



module.exports = router;