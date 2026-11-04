const express = require('express')

const router = express.Router()
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')


router.use('/airplanes',airplaneRoutes)
router.use('/city',cityRoutes)



module.exports= router