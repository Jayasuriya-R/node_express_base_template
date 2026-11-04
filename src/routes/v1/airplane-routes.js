const express = require('express')

const router = express.Router()

const {AirplaneController} = require('../../controllers')
const {AirplaneMiddleware} = require('../../middleware')

// /api/v1/airplanes POST
router.post('/',AirplaneMiddleware.validateCreateAirplane,AirplaneController.createAirplane)

// /api/v1/airplanes GET
router.get('/',AirplaneController.getAllAirplanes)

// /api/v1/airplanes/:id GET
router.get('/:id',AirplaneController.getAirplane)

// /api/v1/airplanes/:id DELETE
router.delete('/:id',AirplaneController.deleteAirplane)


// /api/v1/airplanes/:id PATCH
router.patch('/:id',AirplaneMiddleware.updateAirplane,AirplaneController.updateAirplane)

module.exports = router;