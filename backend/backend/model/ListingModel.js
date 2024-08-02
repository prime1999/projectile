import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		propertyType: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		description: String,
		accommodation: {
			bedrooms: Number,
			bathrooms: Number,
			guests: Number,
		},
		size: String,
		layout: String,
		amenities: {
			essential: [String],
			kitchen: [String],
			bathroom: [String],
			entertainment: [String],
			outdoor: [String],
		},
		photos: [String],
		availability: {
			calendar: String,
			bookedDates: [Date],
		},
		pricing: {
			perNight: String,
			cleaningFee: String,
			taxes: String,
		},
		houseRules: [String],
		reviews: {
			overallRating: Number,
			guestReviews: [
				{
					username: String,
					rating: Number,
					comment: String,
				},
			],
			hostResponse: String,
		},
		host: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		bookingInfo: {
			bookingOptions: String,
			contactInfo: {
				phone: String,
				email: String,
			},
			checkInOut: String,
		},
		additionalInfo: String,
	},
	{ timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;
