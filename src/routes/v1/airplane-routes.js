const express = require('express')

const router = express.Router()

const {AirplaneController} = require('../../controllers')
const {AirplaneMiddleware} = require('../../middleware')

// /api/v1/airplanes POST
router.post('/',AirplaneMiddleware.validateCreateAirplane,AirplaneController.createAirplane)

module.exports = router;