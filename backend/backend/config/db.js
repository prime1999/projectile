import mongoose from "mongoose";

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Connected to: ${conn.connection.host}`);
	} catch (error) {
		console.log(`error: ${error.message}`);
	}
};

export default connectDb;
