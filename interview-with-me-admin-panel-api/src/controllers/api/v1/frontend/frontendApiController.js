import prisma from "../../../../services/prisma/prisma";
import {error, success} from "../../../../helpers/apiResponse";
import {
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_OK
} from "../../../../constants/statusCode";
import logger from "../../../../services/logger/loggerService";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const fetchCourse = async (request, response) => {
    try {
        const course = await prisma.course.findMany({
            include: {
                courseCategory: true,
                instructor: true
            }
        });
        return response.status(HTTP_OK).send(course, 'Course Fetch Successfully', HTTP_OK)
    } catch (exception) {
        logger.error(`course content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCourseCategory = async (request, response) => {
    try {
        const courseCategory = await prisma.courseCategory.findMany({
            include: {
                Course: true
            }
        });
        return response.status(HTTP_OK).send(courseCategory, 'Course Category Fetch Successfully', HTTP_OK)
    } catch (exception) {
        logger.error(`course category content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCategoryWiseCourse = async (request, response) => {
    try {
        const id = request.params.id;
        const course = await prisma.courseCategory.findMany({
            where: {
                id: parseInt(id)
            },
            include: {
                Course: true
            }
        });
        return response.status(HTTP_OK).send(course, 'Course Fetch Successfully', HTTP_OK)
    } catch (exception) {
        logger.error(`course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCourseDetails = async (request, response) => {
    try {
        const id = parseInt(request.params.id) || 0;
        const courseDetail = await prisma.course.findUnique({
            where: {
                id: id
            },
            include: {
                courseLearn: true,
                instructor: true
            }
        });
        const totalLectureCount = await prisma.courseContent.count({
            where: {
                courseId: id
            }
        });
        const relatedCourse = await prisma.course.findMany({
            take: 2,
            where: {
                categoryId: courseDetail.categoryId
            },
            orderBy: {
                id: 'desc'
            }
        });
        return response.status(HTTP_OK).send(success([courseDetail, totalLectureCount, relatedCourse], 'course fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`course fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchCourseContent = async (request, response) => {
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

const fetchReadingContent = async (request, response) => {
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

const fetchQuizTopic = async (request, response) => {
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

const searchQuizQuestion = async (request, response) => {
    try {
        const quizIds = request.params;
        const quizQuestion = await prisma.quizQuestion.findMany({
            where: {
                quizId: {
                    in: quizIds.id
                },
            },
            include: {
                quiz: true,
                courseQuestion: true
            }
        });
        const questionFormat = quizQuestion.map((question) => {
            return {
                'question': question.courseQuestion.question,
                'choices': {
                    'choice_one': question.courseQuestion.choiceOne,
                    'choice_two': question.courseQuestion.choiceTwo,
                    'choice_three': question.courseQuestion.choiceThree,
                    'choice_four': question.courseQuestion.choiceFour,
                },
                'correct_choice': question.courseQuestion.correntChoice
            }
        })
        return response.status(HTTP_OK).send(success(questionFormat, 'Quiz Question fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`quiz question fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}


const quizQuestions = async (request, response) => {
    try {
        const quizId = request.params.id;
        const quizQuestion = await prisma.quizQuestion.findMany({
            where: {
                quizId: parseInt(quizId),
            },
            include: {
                quiz: true,
                courseQuestion: true
            }
        });
        const quiz = await prisma.quiz.findUnique({
            where: {
                id: parseInt(quizId)
            }
        })
        // logger.info(JSON.stringify(quiz))
        const questionFormat = quizQuestion.map((question) => {
            return {
                'question_id': question.id,
                'question': question.courseQuestion.question,
                'choices': {
                    'choice_one': question.courseQuestion.choiceOne,
                    'choice_two': question.courseQuestion.choiceTwo,
                    'choice_three': question.courseQuestion.choiceThree,
                    'choice_four': question.courseQuestion.choiceFour,
                },
                'choice_answer': '',
                'is_multi': parseInt(question.courseQuestion.isMulti),
            }
        })
        const data = {
            questions: questionFormat,
            quiz: quiz
        }
        return response.status(HTTP_OK).send(success(data, 'Quiz Question fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`quiz question fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchTotalCourse = async (request, response) => {
    try {
        const totalCourse = await prisma.course.count();
        return response.status(HTTP_OK).send(success(totalCourse, 'total course fetched successfully', HTTP_OK));
    } catch (error) {
        console.log(error)
    }
}

const checkUserSubscribedCourse = async (request, response) => {
    try {
        const email = request.params.email;
        const courseId = request.params.id;
        const user = await prisma.user.findUnique({
            where: {
                'email': email
            }
        });
        const courseSubscribed = await prisma.subscribedCourse.findFirst({
            where: {
                'userId': user.id,
                'courseId': parseInt(courseId)
            }
        });
        return response.status(HTTP_OK).send(success(courseSubscribed, 'Course Subscribed fetched successfully', HTTP_OK));
    } catch (exception) {
        logger.error(`content fetching : ${exception.message} `);
        return response.status(HTTP_INTERNAL_SERVER_ERROR).send(error(exception.message));
    }
}

const fetchProblems = async (request, response) => {
    let problems = await prisma.codingChallenge.findMany()
    return response.status(HTTP_OK).send(success(problems, 'problems fetched successfully', HTTP_OK));
}

const fetchSubmissions = async (request, response) => {
    let submissions = await prisma.submission.findMany({
        include: {
            question: {
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    level: true,
                    question_type: true,
                    problem_statement: true,
                }
            },
        }
    })
    return response.status(HTTP_OK).send(success(submissions, 'submissions fetched successfully', HTTP_OK));
}


const fetchSingleProblem = async (request, response) => {
    let problem = await prisma.codingChallenge.findFirst({
        where: {
            slug: request.params.question_id
        }
    });

    delete problem.solution;
    delete problem.solution_tester;
    delete problem.testcase;

    return response.status(HTTP_OK).send(success(problem, 'problems fetched successfully', HTTP_OK));
}

const fetchSliders = async (request, response) => {
    const sliders = await prisma.slider.findMany();
    return response.status(HTTP_OK).send(success(sliders, 'Slider fetched successfully', HTTP_OK));
}

const fetchLatestCourse = async (request, response) => {
    const latestCourse = await prisma.course.findMany({
        include: {
            instructor: true
        },
        orderBy: {
            id: 'desc'
        },
        take: 3
    });
    return response.status(HTTP_OK).send(success(latestCourse, 'fetched successfully', HTTP_OK));
}

const fetchMultipleCategoryCourse = async (request, response) => {
    try {
        const Id = request.query.search.split(',').map(v => parseInt(v));
        const course = await prisma.course.findMany({
            where: {
                categoryId: {in: Id ?? []}
            },
            include: {
                courseCategory: true,
                instructor: true
            }
        });
        return response.status(HTTP_OK).send(success(course, 'fetched successfully', HTTP_OK));
    } catch (error) {

    }
}

export {
    fetchCourse,
    fetchCourseDetails,
    fetchCourseContent,
    fetchReadingContent,
    fetchQuizTopic,
    searchQuizQuestion,
    fetchCourseCategory,
    fetchCategoryWiseCourse,
    fetchTotalCourse,
    checkUserSubscribedCourse,
    fetchProblems,
    fetchSubmissions,
    fetchSingleProblem,
    quizQuestions,
    fetchSliders,
    fetchLatestCourse,
    fetchMultipleCategoryCourse
}