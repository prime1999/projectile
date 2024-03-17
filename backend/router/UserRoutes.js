import express from "express";
import {
	authUser,
	logUserOut,
	registerUser,
} from "../controller/UserController.js";

const userRouter = express.Router();

/* 
POST: create a user (registerUser)
POST: log user in (authUser)
POST: log user out (logUserOut)
*/

userRouter.post("/registerUser", registerUser);
userRouter.post("/authUser", authUser);
userRouter.post("/logUserOut", logUserOut);

export default userRouter;
