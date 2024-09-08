import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRouter from "./router/UserRoutes.js";
import taskRouter from "./router/TaskRoute.js";
dotenv.config();

const port = process.env.PORT || 5000;

// connect to DB
connectDB();

// init express app
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// cookie parser middleware
app.use(cookieParser());

// routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

// error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`App is running on port ${port}`));
