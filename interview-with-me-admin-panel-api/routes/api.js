import {Router} from "express";
import * as loginController from "../src/controllers/api/v1/auth/loginController";
import * as courseCategoryController from "../src/controllers/api/v1/courseCategory/courseCategoryController";
import * as courseController from "../src/controllers/api/v1/course/courseController";
import * as courseContentCategoryController from "../src/controllers/api/v1/courseContentCategory/courseContentCategoryController";
import * as courseContentController from "../src/controllers/api/v1/courseContent/courseContentController";

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
router.get('/course', courseController.index);
router.post('/course', courseRequestValidate(), courseController.store);
router.get('/course/:id', courseController.show);
router.put('/course/:id', courseUpdateRequestValidate(), courseController.update);
router.delete('/course/:id', courseController.destroy);

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

export default router;