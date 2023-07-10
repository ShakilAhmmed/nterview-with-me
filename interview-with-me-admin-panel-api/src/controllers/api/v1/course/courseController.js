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

const index = async (request, response) => {
    try {
        const {offset, limit} = getLimitOffset(request);
        const course = await prisma.course.findMany({
            skip : offset,
            take: limit,
            include: {
                courseCategory: true
            }
        });
        return response.status(HTTP_OK).send(success(course,
            'courses fetched successfully',
            HTTP_OK,
            getResponseMeta(request)
        ));
    } catch (exception) {
        logger.error(`courses fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const store = async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            return response.status(HTTP_VALIDATION_ERROR).json({errors: errors.array()})
        }
        let {name,short_description, course_overview, status,course_category_id} = request.body;

        const course = await prisma.course.create({
            data: {
                name,
                shortDescription : short_description,
                courseOverview : course_overview,
                status,
                courseCategory : {
                    connect: { id : parseInt(course_category_id)}
                },
                createdByUser : {
                    connect: { id: 1}
                },
            }
        })
        logger.info('create course');
        return response.status(HTTP_OK).send(success(course, 'course created successfully', HTTP_CREATED));
    } catch (exception) {
        logger.error(`create course : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const show = async (request, response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const course = await prisma.course.findUnique({
            where: {
                id: id
            }
        });
        return response.status(HTTP_OK).send(success(course, 'course fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`courses fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const update = async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(HTTP_VALIDATION_ERROR).json({errors: errors.array()})
        }
        const id = parseInt(request.params.id) || 0;
        let {name, short_description, course_overview, status,course_category_id} = request.body;
        const course = await prisma.course.update({
            where: {
                id: id
            },
            data: {
                name,
                shortDescription : short_description,
                courseOverview : course_overview,
                status,
                courseCategory : {
                    connect: { id : parseInt(course_category_id)}
                },
                createdByUser : {
                    connect: { id: 1}
                },
            }
        })
        logger.info('update course');
        return response.status(HTTP_OK).send(success(course, 'course update successfully', HTTP_CREATED));
    } catch (exception) {
        logger.error(`update course: ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const destroy = async (request, response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const course = await prisma.course.findUnique({
            where: {
                id: id
            }
        });
        if (course) {
            const course = await prisma.course.delete({
                where: {
                    id: id
                }
            });
        }
        return response.status(HTTP_OK).send(success([], 'course deleted successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`course deleting : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

export {index, store, show, update, destroy}