import express from "express";
import { getAllTasks, getProjectTasks } from "../controller/TaskController.js";

const taskRouter = express.Router();

/* 
GET: get all tasks  of a user (getAllTasks),
GET: get all tasks of a project (getProjectTasks)
POST: create a task for a project (createProjectTask)
*/

taskRouter.get("/getAllTasks", getAllTasks);
taskRouter.get("/getProjectTasks", getProjectTasks);

export default taskRouter;
