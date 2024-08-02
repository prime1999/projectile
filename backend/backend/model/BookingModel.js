const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
	{
		listing: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Listing",
			required: true,
		},
		guest: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		checkInDate: {
			type: Date,
			required: true,
		},
		checkOutDate: {
			type: Date,
			required: true,
		},
		totalPrice: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
