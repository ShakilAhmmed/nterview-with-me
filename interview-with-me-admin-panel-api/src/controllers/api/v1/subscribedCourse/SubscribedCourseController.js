import {getLimitOffset, getResponseMeta} from "../../../../helpers/pagination";
import prisma from "../../../../services/prisma/prisma";
import {error, success} from "../../../../helpers/apiResponse";
import {
    HTTP_CREATED,
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_OK,
    HTTP_VALIDATION_ERROR
} from "../../../../constants/statusCode";
import logger from "../../../../services/logger/loggerService";
import {validationResult} from "express-validator";

const index = async (request,response) => {
    try {
        const {offset, limit} = getLimitOffset(request);
        const subscribedCourse = await prisma.subscribedCourse.findMany({
            skip: offset,
            take: limit
        });
        return response.status(HTTP_OK).send(success(subscribedCourse,
            'course question fetched successfully',
            HTTP_OK,
            getResponseMeta(request)
        ))
    } catch (exception) {
        logger.error(`subscribed course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const store = async (request,response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            return response.status(HTTP_VALIDATION_ERROR).json({errors: errors.array()})
        }
        let {user_id,course_id} = request.body;
        const subscribedCourse = await prisma.subscribedCourse.create({
            data : {
                course : {
                    connect: {id : course_id}
                },
                user : {
                    connect : {id : user_id}
                },
            }
        });
        logger.info('create subscribed course');
        return response.status(HTTP_OK).send(success(subscribedCourse, 'subscribed course created successfully', HTTP_CREATED));
    } catch (exception) {
        logger.error(`create subscribed course : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const show = async (request,response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const subscribedCourse = await prisma.subscribedCourse.findUnique({
            where : {
                id : id
            }
        });
        return response.status(HTTP_OK).send(success(subscribedCourse, 'subscribed course fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`subscribed course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const update = async (request,response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            return response.status(HTTP_VALIDATION_ERROR).json({errors: errors.array()})
        }
        const id = parseInt(request.params.id) || 0;
        let {user_id,course_id} = request.body;
        const subscribedCourse = await prisma.subscribedCourse.update({
            where : {
                id : id
            },
            data : {
                course : {
                    connect: {id : course_id}
                },
                user : {
                    connect : {id : user_id}
                },
            }
        });
        logger.info('update subscribed course');
        return response.status(HTTP_OK).send(success(subscribedCourse, 'subscribed course update successfully', HTTP_CREATED));
    } catch (exception) {
        logger.error(`update subscribed course: ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const destroy = async (request,response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const subscribedCourse = await prisma.subscribedCourse.findUnique({
            where : {
                id : id
            }
        });
        if (subscribedCourse){
            const subscribedCourse = await prisma.subscribedCourse.delete({
                where : {
                    id : id
                }
            })
        }
        return response.status(HTTP_OK).send(success([], 'subscribed course deleted successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`subscribed course deleting : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

export {index,store,show,update,destroy}