import express from "express";
import {config} from "dotenv";
import router from "./routes/api";
import logger from "morgan";
import cookieParser from "cookie-parser";
import httpLoggerService from "./src/services/logger/httpLoggerService";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

const application = express();
config();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Documentation',
        version: '1.0.0',
    },
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
application.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
application.use(logger('dev'));
application.use(httpLoggerService);
application.use(express.json());
application.use(express.urlencoded({extended: false}));
application.use(cookieParser());
application.use(cors());
application.use('/api/v1', router);
export default application;