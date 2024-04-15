import express from "express";
// import { signup} from "../controller/user.controller.js";
// import { signup } from "../controller/User.controller";
import {signup, login}  from "../controller/User.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router; 