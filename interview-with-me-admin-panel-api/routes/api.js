import {Router} from "express";
import * as loginController from "../src/controllers/api/v1/auth/loginController";
import * as courseCategoryController from "../src/controllers/api/v1/courseCategory/courseCategoryController";
import loginRequestValidate from "../src/formRequests/v1/auth/loginRequest";
import registerRequest from "../src/formRequests/v1/auth/registerRequest";
import courseCategoryRequestValidate from "../src/formRequests/v1/courseCategory/courseCategoryRequestValidate";
import courseCategoryUpdateRequestValidate
    from "../src/formRequests/v1/courseCategory/courseCategoryUpdateRequestValidate";

const router = Router();

router.post('/login', loginRequestValidate(), loginController.login);
router.post('/register', registerRequest(), loginController.register);
router.get('/course-categories', courseCategoryController.index);
router.post('/course-categories', courseCategoryRequestValidate(), courseCategoryController.store);
router.get('/course-categories/:id', courseCategoryController.show);
router.put('/course-categories/:id', courseCategoryUpdateRequestValidate(), courseCategoryController.update);
router.delete('/course-categories/:id', courseCategoryController.destroy);


export default router;