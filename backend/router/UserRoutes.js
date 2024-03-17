import express from "express";
import {
	authUser,
	logUserOut,
	registerUser,
	verifyCode,
} from "../controller/UserController.js";

const userRouter = express.Router();

/* 
POST: create a user (registerUser)
POST: log user in (authUser)
POST: log user out (logUserOut)
POST: verify code (verifyCode)
*/

userRouter.post("/registerUser", registerUser);
userRouter.post("/verifyCode", verifyCode);
userRouter.post("/authUser", authUser);
userRouter.post("/logUserOut", logUserOut);

export default userRouter;
