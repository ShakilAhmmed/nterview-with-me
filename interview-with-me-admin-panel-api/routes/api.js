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
router.get('/quiz', quizController.index);
router.get('/quiz', quizRequestValidate(), quizController.store);
router.get('/quiz/:id', quizController.show);
router.get('/quiz/:id', quizRequestUpdateValidate(), quizController.update);
router.get('/quiz/:id', quizController.destroy);

//quizQuestion
router.get('/quiz-question', quizQuestionController.index);
router.get('/quiz-question', quizQuestionRequestValidate(), quizQuestionController.store);
router.get('/quiz-question/:id', quizQuestionController.show);
router.get('/quiz-question/:id', quizQuestionRequestValidate(), quizQuestionController.update);
router.get('/quiz-question/:id', quizQuestionController.destroy);

//quizParticipators
router.get('/quiz-participator', quizQuestionController.index);
router.get('/quiz-participator', quizParticipatorRequestValidate(), quizQuestionController.store);
router.get('/quiz-participator/:id', quizQuestionController.show);
router.get('/quiz-participator/:id', quizParticipatorRequestValidate(), quizQuestionController.update);
router.get('/quiz-participator/:id', quizQuestionController.destroy);

//participatorProgress
router.get('/participator-progress', participatorProgressController.index);
router.get('/participator-progress', participatorProgressRequestValidate(), participatorProgressController.store);
router.get('/participator-progress/:id', participatorProgressController.show);
router.get('/participator-progress/:id', participatorProgressRequestValidate(), participatorProgressController.update);
router.get('/participator-progress/:id', participatorProgressController.destroy);

export default router;