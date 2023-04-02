import {Router} from "express";
import * as loginController from "../src/controllers/api/v1/auth/loginController"
import loginRequestValidate from "../src/formRequests/v1/auth/loginRequest";
import registerRequest from "../src/formRequests/v1/auth/registerRequest";

const router = Router();

router.post('/login', loginRequestValidate(), loginController.login);
router.post('/register', registerRequest(), loginController.register);


export default router;