import prisma from "../../../../services/prisma/prisma";
import {error, success} from "../../../../helpers/apiResponse";
import {
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_OK
} from "../../../../constants/statusCode";
import logger from "../../../../services/logger/loggerService";

const fetchCourseContent = async (request,response) => {
    try {
        const courseContent = await  prisma.courseContentCategory.findMany({
            include:{
                courseContent: true
            }
        });
        return response.status(HTTP_OK).send(courseContent,'Course Content Fetch Successfully',HTTP_OK)
    } catch (exception) {
        logger.error(`course content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

export {fetchCourseContent}