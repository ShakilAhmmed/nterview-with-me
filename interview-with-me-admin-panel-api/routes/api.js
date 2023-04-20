import {Router} from "express";
import * as loginController from "../src/controllers/api/v1/auth/loginController";
import * as courseCategoryController from "../src/controllers/api/v1/courseCategory/courseCategoryController";
import * as courseController from "../src/controllers/api/v1/course/courseController";
import loginRequestValidate from "../src/formRequests/v1/auth/loginRequest";
import registerRequest from "../src/formRequests/v1/auth/registerRequest";
import courseCategoryRequestValidate from "../src/formRequests/v1/courseCategory/courseCategoryRequestValidate";
import courseCategoryUpdateRequestValidate
    from "../src/formRequests/v1/courseCategory/courseCategoryUpdateRequestValidate";
import courseRequestValidate from "../src/formRequests/v1/course/courseRequestValidate";
import courseUpdateRequestValidate from "../src/formRequests/v1/course/courseUpdateRequestValidate";


const router = Router();

// auth
router.post('/login', loginRequestValidate(), loginController.login);
router.post('/register', registerRequest(), loginController.register);

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


export default router;