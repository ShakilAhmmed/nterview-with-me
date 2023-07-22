import {Router} from "express";
import * as loginController from "../src/controllers/api/v1/auth/loginController";
import * as courseCategoryController from "../src/controllers/api/v1/courseCategory/courseCategoryController";
import * as courseController from "../src/controllers/api/v1/course/courseController";
import * as courseContentCategoryController from "../src/controllers/api/v1/courseContentCategory/courseContentCategoryController";
import * as courseContentController from "../src/controllers/api/v1/courseContent/courseContentController";
import * as courseQuestionController from "../src/controllers/api/v1/courseQuestion/courseQuestionController";
import * as UserController from "../src/controllers/api/v1/auth/userController";
import * as subscribedCourseController from "../src/controllers/api/v1/subscribedCourse/SubscribedCourseController";
import * as courseProgressController from "../src/controllers/api/v1/courseProgess/courseProgessController";
import * as quizController from "../src/controllers/api/v1/quiz/quizController";
import * as quizQuestionController from "../src/controllers/api/v1/quizQuestion/quizQuestionController";
import * as quizParticipatorsController from "../src/controllers/api/v1/quizParticipators/quizParticipatorsController";
import * as participatorProgressController from "../src/controllers/api/v1/participatorProgress/participatorProgressController";
import * as questionGenerateController from "../src/controllers/api/v1/questionGenerate/questionGenerateController"

import * as fetchCourseContentDetails from "../src/controllers/api/v1/courseContent/fetchCourseContentDetails";

import * as commonApiController from "../src/controllers/api/v1/commonAPI/commonAPIController";
import * as frontendApiController from "../src/controllers/api/v1/frontend/frontendApiController";

import loginRequestValidate from "../src/formRequests/v1/auth/loginRequest";
import registerRequest from "../src/formRequests/v1/auth/registerRequest";
import courseCategoryRequestValidate from "../src/formRequests/v1/courseCategory/courseCategoryRequestValidate";
import courseCategoryUpdateRequestValidate
    from "../src/formRequests/v1/courseCategory/courseCategoryUpdateRequestValidate";
import courseRequestValidate from "../src/formRequests/v1/course/courseRequestValidate";
import courseUpdateRequestValidate from "../src/formRequests/v1/course/courseUpdateRequestValidate";
import courseContentCategoryRequestValidate
    from "../src/formRequests/v1/courseContentCategory/courseContentCategoryRequestValidate";
import courseContentCategoryUpdateRequestValidate
    from "../src/formRequests/v1/courseContentCategory/courseContentCategoryUpdateRequestValidate";
import courseContentRequestValidate from "../src/formRequests/v1/courseContent/courseContentRequestValidate";
import courseContentUpdateRequestValidate
    from "../src/formRequests/v1/courseContent/courseContentUpdateRequestValidate";
import courseQuestionValidate from "../src/formRequests/v1/courseQuestion/courseQuestionValidate";
import userRegisterRequest from "../src/formRequests/v1/auth/userRegisterRequest";
import userLoginRequest from "../src/formRequests/v1/auth/userLoginRequest";
import subscribedCourseRequestValidate from "../src/formRequests/v1/subscribedCourse/subscribedCourseRequestValidate";
import courseProgressRequestValidate from "../src/formRequests/v1/courseProgress/courseProgressRequestValidate";
import quizRequestValidate from "../src/formRequests/v1/quiz/quizRequestValidate";
import quizRequestUpdateValidate from "../src/formRequests/v1/quiz/quizRequestUpdateValidate";
import quizQuestionRequestValidate from "../src/formRequests/v1/quizQuestion/quizQuestionRequestValidate";
import quizParticipatorRequestValidate from "../src/formRequests/v1/quizParticipators/quizParticipatorRequestValidate";
import participatorProgressRequestValidate
    from "../src/formRequests/v1/participatorProgress/participatorProgressRequestValidate";
import {fetchCourse, fetchCourseContent} from "../src/controllers/api/v1/frontend/frontendApiController";
import {contentDetails} from "../src/controllers/api/v1/courseContent/fetchCourseContentDetails";
import {generateQuestion} from "../src/controllers/api/v1/questionGenerate/questionGenerateController";


const router = Router();

// auth
router.post('/login', loginRequestValidate(), loginController.login);
router.post('/register', registerRequest(), loginController.register);

//user
router.post('/user-register', userRegisterRequest(), UserController.register);
router.post('/user-login', userLoginRequest(), UserController.login);

// course-category
router.get('/course-categories', courseCategoryController.index);
router.post('/course-categories', courseCategoryRequestValidate(), courseCategoryController.store);
router.get('/course-categories/:id', courseCategoryController.show);
router.put('/course-categories/:id', courseCategoryUpdateRequestValidate(), courseCategoryController.update);
router.delete('/course-categories/:id', courseCategoryController.destroy);

//course
router.get('/courses', courseController.index);
router.post('/courses', courseRequestValidate(), courseController.store);
router.get('/courses/:id', courseController.show);
router.put('/courses/:id', courseUpdateRequestValidate(), courseController.update);
router.delete('/courses/:id', courseController.destroy);

// course Content Category
router.get('/course-content-category', courseContentCategoryController.index);
router.post('/course-content-category', courseContentCategoryRequestValidate(), courseContentCategoryController.store);
router.get('/course-content-category/:id', courseContentCategoryController.show);
router.put('/course-content-category/:id', courseContentCategoryUpdateRequestValidate(), courseContentCategoryController.update);
router.delete('/course-content-category/:id', courseContentCategoryController.destroy);

//course Content
router.get('/course-content', courseContentController.index);
router.post('/course-content', courseContentRequestValidate(), courseContentController.store);
router.get('/course-content/:id', courseContentController.show);
router.put('/course-content/:id', courseContentUpdateRequestValidate(), courseContentController.update);
router.delete('/course-content/:id', courseContentController.destroy);

//course Question
router.get('/course-question', courseQuestionController.index);
router.post('/course-question', courseQuestionValidate(), courseQuestionController.store);
router.get('/course-question/:id', courseQuestionController.show);
router.put('/course-question/:id', courseQuestionValidate(), courseQuestionController.update);
router.delete('/course-question/:id', courseQuestionController.destroy);

//subscribed course
router.get('/subscribed-course', subscribedCourseController.index);
router.post('/subscribed-course', subscribedCourseRequestValidate(), subscribedCourseController.store);
router.get('/subscribed-course/:id', subscribedCourseController.show);
router.put('/subscribed-course/:id', subscribedCourseRequestValidate(), subscribedCourseController.update);
router.delete('/subscribed-course/:id', subscribedCourseController.destroy);

//course progress
router.get('/course-progress', courseProgressController.index);
router.post('/course-progress', courseProgressRequestValidate(), courseProgressController.store);
router.get('/course-progress/:id', courseProgressController.show);
router.put('/course-progress/:id', courseProgressRequestValidate(), courseProgressController.update);
router.delete('/course-progress/:id', courseProgressController.destroy);

//quiz
router.get('/quizs', quizController.index);
router.post('/quizs', quizRequestValidate(), quizController.store);
router.get('/quizs/:id', quizController.show);
router.put('/quizs/:id', quizRequestUpdateValidate(), quizController.update);
router.delete('/quizs/:id', quizController.destroy);

//quizQuestion
router.get('/quiz-questions', quizQuestionController.index);
router.post('/quiz-questions', quizQuestionRequestValidate(), quizQuestionController.store);
router.get('/quiz-questions/:id', quizQuestionController.show);
router.put('/quiz-questions/:id', quizQuestionRequestValidate(), quizQuestionController.update);
router.delete('/quiz-questions/:id', quizQuestionController.destroy);

//quizParticipators
router.get('/quiz-participators', quizParticipatorsController.index);
router.post('/quiz-participators', quizParticipatorRequestValidate(), quizParticipatorsController.store);
router.get('/quiz-participators/:id', quizParticipatorsController.show);
router.put('/quiz-participators/:id', quizParticipatorRequestValidate(), quizParticipatorsController.update);
router.delete('/quiz-participators/:id', quizParticipatorsController.destroy);

//participatorProgress
router.get('/participator-progress', participatorProgressController.index);
router.post('/participator-progress', participatorProgressRequestValidate(), participatorProgressController.store);
router.get('/participator-progress/:id', participatorProgressController.show);
router.put('/participator-progress/:id', participatorProgressRequestValidate(), participatorProgressController.update);
router.delete('/participator-progress/:id', participatorProgressController.destroy);

//question generate
router.post('/question-generate', questionGenerateController.generateQuestion);

//fetch content details
router.get('/fetch-content-details/:id',fetchCourseContentDetails.contentDetails);

//common api
router.get('/fetch-course-category', commonApiController.courseCategory);
router.get('/fetch-courses', commonApiController.course);
router.get('/fetch-course-content-category', commonApiController.courseContentCategory);
router.get('/fetch-course-questions', commonApiController.courseQuestion);
router.get('/fetch-quizs', commonApiController.quiz);

router.get('/frontend/fetch-course', frontendApiController.fetchCourse);
router.get('/frontend/fetch-course-details/:id',frontendApiController.fetchCourseDetails);
router.get('/frontend/fetch-course-contents/:id', frontendApiController.fetchCourseContent)
router.get('/frontend/fetch-reading-content/:course_id/:id',frontendApiController.fetchReadingContent);
router.get('/frontend/fetch-quiz',frontendApiController.fetchQuizTopic);
router.get('/frontend/search-quiz-question',frontendApiController.searchQuizQuestion);

export default router;