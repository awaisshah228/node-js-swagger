const express = require('express');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options= require('../utils/swaggerConfig')




const api = express.Router();

const specs = swaggerJsDoc(options);
api.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



module.exports = api;