const express = require('express');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options= {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8000/v1",
			},
		],
	},
	apis: ["./src/routes/*.js"],
};





const api = express.Router();

const specs = swaggerJsDoc(options);
api.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
api.use("/test", require('./testRouter'));



module.exports = api;