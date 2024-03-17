// function to check the status code for any error code
const errorHandler = (err, req, res, next) => {
	// check the statusecode if it is 200 then send 500 else send te error code itself
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;
	// check for mongoose bad objectId
	if (err.name === "CastError" && err.kind === "ObjectId") {
		message = "Resource not Found";
		statusCode = 404;
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === "production" ? "" : err.stack,
	});
};
// function to handle not founds
const notFound = (req, res, next) => {
	const error = new Error(`Not found-${req.originalUrl}`);
	res.status(404);
	next(error);
};

export { notFound, errorHandler };
