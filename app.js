//Import modules/dependencies 
const express = require("express")
const cors = require("cors")

//Creating an instance of express
const app = express()

//Apply the cors middleware
app.use(cors())

module.exports = app;