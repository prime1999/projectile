import mongoose from "mongoose";

const connectDB = async () => {
	try {
		// connect the backend to the mongoDB database for the project
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Mongodb connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`error: ${error.message}`);
	}
};

export default connectDB;
