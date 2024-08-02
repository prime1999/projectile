import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";

// connect serverto DB
connectDb();

// get the port value
const port = process.env.PORT || 9000;

// init an express app
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("App is running...");
});

// listen to request on the port number
app.listen(port, () => console.log(`App is running on port ${port}`));
