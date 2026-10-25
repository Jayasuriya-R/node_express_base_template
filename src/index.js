
const express = require('express')
const {serverConfig,logger} = require("./config")

const app = express()

const apiRouter = require("./routes")

app.use ('/api',apiRouter)

app.listen(serverConfig.PORT,()=> {
    console.log("App started on port :" + serverConfig.PORT);
    
})