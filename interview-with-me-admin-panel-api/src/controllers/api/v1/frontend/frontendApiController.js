import prisma from "../../../../services/prisma/prisma";
import {error, success} from "../../../../helpers/apiResponse";
import {
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_OK
} from "../../../../constants/statusCode";
import logger from "../../../../services/logger/loggerService";

const fetchCourse = async (request,response) => {
    try {
        const course = await  prisma.course.findMany({
            include:{
                courseCategory: true
            }
        });
        return response.status(HTTP_OK).send(course,'Course Fetch Successfully',HTTP_OK)
    } catch (exception) {
        logger.error(`course content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCourseDetails = async (request,response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const courseDetail = await prisma.course.findUnique({
            where: {
                id: id
            }
        });
        return response.status(HTTP_OK).send(success(courseDetail, 'course fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCourseContent = async (request,response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const courseDetail = await prisma.courseContentCategory.findMany({
            where: {
                courseId: id
            },
            include: {
                courseContent: true
            }
        });
        return response.status(HTTP_OK).send(success(courseDetail, 'course content fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchReadingContent = async (request,response) => {
    try {
        const courseId = parseInt(request.params.course_id) || 0;
        const contentId = parseInt(request.params.id) || 0;
        const courseDetail = await prisma.courseContent.findUnique({
            where: {
                id: contentId,
            },
        });
        return response.status(HTTP_OK).send(success(courseDetail, 'content reading fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

export {fetchCourse,fetchCourseDetails,fetchCourseContent,fetchReadingContent}