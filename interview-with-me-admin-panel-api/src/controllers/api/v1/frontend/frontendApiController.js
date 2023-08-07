import prisma from "../../../../services/prisma/prisma";
import {error, success} from "../../../../helpers/apiResponse";
import {
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_OK
} from "../../../../constants/statusCode";
import logger from "../../../../services/logger/loggerService";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

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

const fetchQuizTopic = async (request,response) => {
    try {
        const quiz = await prisma.quiz.findMany();
        const format = quiz.map((item) => {
            return {
                'value': item.id,
                'label': item.QuizTitle
            }
        })
        return response.status(HTTP_OK).send(success(format, 'quiz fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`quiz fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const searchQuizQuestion = async (request,response) => {
    try {
        const quizId = request.params.id;
        const quizQuestion = await prisma.quizQuestion.findMany({
            where: {
                quizId:parseInt(quizId),
            },
            include:{
                quiz: true,
                courseQuestion: true
            }
        });
        const quiz = await prisma.quiz.findUnique({
            where :{
                id : parseInt(quizId)
            }
        })
        // logger.info(JSON.stringify(quiz))
        const questionFormat = quizQuestion.map((question) => {
            return {
                'question_id': question.courseQuestion.id,
                'question': question.courseQuestion.question,
                'choices': {
                        'choice_one': question.courseQuestion.choiceOne,
                        'choice_two':question.courseQuestion.choiceTwo,
                        'choice_three':question.courseQuestion.choiceThree,
                        'choice_four':question.courseQuestion.choiceFour,
                },
                'correct_choice' : question.courseQuestion.correntChoice,
                'is_multi' : question.courseQuestion.isMulti,
            }
        })
        const data = [
            questionFormat,
            quiz
        ]
        return response.status(HTTP_OK).send(success(data, 'Quiz Question fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`quiz question fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

export {fetchCourse,fetchCourseDetails,fetchCourseContent,fetchReadingContent,fetchQuizTopic,searchQuizQuestion}