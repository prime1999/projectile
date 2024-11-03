import express from "express";
import { getAllSchedules } from "../controller/ScheduleController.js";

const scheduleRouter = express.Router();

/* 
GET: get all schedules  of a user (getAllschedules),
GET: get all schedules for a project (getProjectSchedules)
POST: create a schedule for a project (createProjectSchedule)
POST: create a schedule (createSchedule)
*/

taskRouter.get("/getAllSchedules", getAllSchedules);
// taskRouter.get("/getProjectTasks", getProjectTasks);

export default scheduleRouter;
