const listings = [
	{
		title: "Cozy Loft in Downtown Manhattan",
		favorite: true,
		views: "Amazing Views",
		propertyType: "house",
		location: "New York City, NY - SoHo neighborhood",
		description:
			"This charming loft offers stunning views of the city skyline and is located within walking distance of top restaurants and attractions.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 2,
			guests: 4,
		},
		size: "1,000 square feet",
		layout: "Open-plan living area with kitchen, dining, and lounge areas",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],
			outdoor: ["Private balcony with seating area"],
		},
		photos: [
			"/images/house_1.jpg",
			"/images/house_2.jpg",
			"/images/house_3.jpg",
			"/images/house_4.jpg",
			"/images/house_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-07-04", "2024-07-05", "2024-07-06"],
		},
		pricing: {
			priceAfterTax: "$116",
			priceBeforeTax: "$100",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.8,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment: "Great location, clean and comfortable space.",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment: "Lovely loft with amazing views!",
				},
			],
			hostResponse:
				"Thank you for your kind words! We look forward to hosting you again.",
		},
		host: "65fdfa2a3411e9ebc83d4cfa",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "john@example.com",
			},
			checkInOut: "Self-check-in with lockbox",
		},
		additionalInfo:
			"Conveniently located near subway stations, grocery stores, and popular attractions such as Central Park and Times Square.",
	},
	//////////////////////////////
	{
		title: "Modern Apartment in Downtown LA",
		favorite: true,
		views: "Surfing",
		propertyType: "apartment",
		location: "Los Angeles, CA - Downtown district",
		description:
			"This modern apartment offers stunning views of the city skyline and is located within walking distance of top restaurants and attractions.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 1,
			guests: 4,
		},
		size: "1,200 square feet",
		layout: "Open-plan living area with kitchen, dining, and lounge areas",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],
			outdoor: ["Smart TV", "Netflix", "Board games"],
		},
		photos: [
			"/images/apartment_1.jpg",
			"/images/apartment_2.jpg",
			"/images/apartment_3.jpg",
			"/images/apartment_4.jpg",
			"/images/apartment_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-07-01", "2024-07-02", "2024-07-03"],
		},
		pricing: {
			priceAfterTax: "$1,568",
			priceBeforeTax: "$1,450",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.9,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment: "Beautiful apartment with great amenities!",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment: "Perfect location and very clean space.",
				},
			],
			hostResponse:
				"Thank you for your kind words! We strive to provide an exceptional stay for our guests.",
		},
		host: "65fdfa2a3411e9ebc83d4cfb",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "jane@example.com",
			},
			checkInOut: "Self-check-in with lockbox",
		},
		additionalInfo:
			"Conveniently located near public transportation and major attractions.",
	},
	////////////////////////////////
	{
		title: "Spacious Family Home in Suburban Neighborhood",
		favorite: false,
		views: "Trending",
		propertyType: "house",
		location: "Seattle, WA - Suburban neighborhood",
		description:
			"This spacious family home is perfect for large groups or families. It features a backyard with a BBQ grill and is located in a quiet suburban neighborhood.",
		accommodation: {
			bedrooms: 4,
			bathrooms: 2.5,
			guests: 8,
		},
		size: "2,500 square feet",
		layout:
			"Multiple living areas with a fully equipped kitchen, dining room, and cozy bedrooms",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],
			outdoor: ["Backyard", "BBQ grill", "Patio furniture"],
		},
		photos: [
			"/images/house/trendingHouse_1.jpg",
			"/images/house/trendingHouse_2.jpg",
			"/images/house/trendingHouse_3.jpg",
			"/images/house/trendingHouse_4.jpg",
			"/images/house/trendingHouse_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-06-01", "2024-06-02", "2024-06-03"],
		},
		pricing: {
			priceAfterTax: "$282",
			priceBeforeTax: "$252",
			cleaningFee: "$100",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No parties or events",
			"Quiet hours after 10 PM",
		],
		reviews: {
			starRating: 4.7,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment: "Great house with plenty of space for everyone!",
				},
				{
					username: "Guest2",
					rating: 5,
					comment: "Beautiful neighborhood and comfortable accommodations.",
				},
			],
			hostResponse:
				"Thank you for your feedback! We're glad you enjoyed your stay.",
		},
		host: "65fdfa2a3411e9ebc83d4cfc",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "john@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Close to parks, shops, and restaurants. Easy access to downtown Seattle.",
	},
	///////////////////////////
	{
		title: "Cozy bara in the Heart of Tokyo",
		favorite: false,
		views: "New",
		propertyType: "Bara",
		location: "Tokyo, Japan - City center",
		description:
			"Experience traditional Japanese hospitality in this cozy bara located in the heart of Tokyo. Close to shopping, dining, and entertainment.",
		accommodation: {
			bedrooms: 1,
			bathrooms: 1,
			guests: 2,
		},
		size: "300 square feet",
		layout: "Intimate seating area with a bar counter and a small stage",
		amenities: {
			essential: ["Free Wi-Fi", "Heating"],
			outdoor: [],
		},
		photos: [
			"/images/homes/home_1jpg",
			"/images/homes/home_2jpg",
			"/images/homes/home_3jpg",
			"/images/homes/home_4jpg",
			"/images/homes/home_5jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-06-01", "2024-06-02", "2024-06-03"],
		},
		pricing: {
			priceAfterTax: "$114",
			priceBeforeTax: "$110",
			cleaningFee: "$20",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No outside food or drinks",
			"Enjoy the entertainment responsibly",
		],
		reviews: {
			starRating: 4.5,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4,
					comment: "Unique experience, great drinks!",
				},
				{
					username: "Guest2",
					rating: 5,
					comment: "Fantastic atmosphere and friendly staff.",
				},
			],
			hostResponse:
				"Thank you for your visit! We're glad you enjoyed your time at our bara.",
		},
		host: "65fdfa2a3411e9ebc83d4cfe",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "yuki@example.com",
			},
			checkInOut: "Check-in: 6 PM, Check-out: 11 PM",
		},
		additionalInfo: "Live music performances every Friday and Saturday night.",
	},
	//////////////////////////////////////
	{
		title: "Cozy Mountain Cabin with Stunning Views",
		favorite: true,
		views: "Earth Homes",
		propertyType: "cabin",
		location: "Banff, Alberta - Canadian Rockies",
		description:
			"Escape to this cozy mountain cabin nestled in the breathtaking Canadian Rockies. Enjoy panoramic views, serene surroundings, and access to outdoor adventures year-round.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 1,
			guests: 4,
		},
		size: "800 square feet",
		layout:
			"Rustic cabin with a spacious living area, fireplace, fully equipped kitchen, and outdoor deck",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Fireplace"],
			outdoor: ["Deck with mountain views", "Fire pit", "Hiking trails nearby"],
		},
		photos: [
			"/images/cabin/cabin_1jpg",
			"/images/cabin/cabin_2jpg",
			"/images/cabin/cabin_3jpg",
			"/images/cabin/cabin_4jpg",
			"/images/cabin/cabin_5jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-07-09", "2025-07-10", "2025-07-11"],
		},
		pricing: {
			priceAfterTax: "$271",
			priceBeforeTax: "$252",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.8,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"A perfect mountain retreat! The cabin was cozy and the views were spectacular.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"Absolutely stunning! The cabin exceeded all expectations and the surroundings were breathtaking.",
				},
			],
			hostResponse:
				"Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our mountain cabin.",
		},
		host: "65fdfa2a3411e9ebc83d4cfd",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "sophie@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore nearby national parks, lakes, and scenic drives in the Canadian Rockies.",
	},
	////////////////////////////
	{
		title: "Luxury Yacht on the French Riviera",
		favorite: true,
		views: "boats",
		propertyType: "boat",
		location: "Nice, France - Port area",
		description:
			"Experience the ultimate luxury on this beautiful yacht docked in the scenic port of Nice. Perfect for a romantic getaway or a memorable vacation with friends.",
		accommodation: {
			bedrooms: 3,
			bathrooms: 2,
			guests: 6,
		},
		size: "1,500 square feet",
		layout:
			"Spacious deck area, elegant living quarters, and modern amenities throughout",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],

			outdoor: ["Smart TV", "DVD player", "Sound system"],
		},
		photos: [
			"/images/boat/boat_1jpg",
			"/images/boat/boat_2jpg",
			"/images/boat/boat_3jpg",
			"/images/boat/boat_4jpg",
			"/images/boat/boat_5jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-07-01", "2024-07-02", "2024-07-03"],
		},
		pricing: {
			priceAfterTax: "$452",
			priceBeforeTax: "$445",
			cleaningFee: "$100",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Respect the yacht and its belongings",
		],
		reviews: {
			starRating: 4.8,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"Unforgettable experience! The yacht exceeded all expectations.",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment: "Stunning views and impeccable service. Highly recommend!",
				},
			],
			hostResponse:
				"Thank you for your kind words! It was a pleasure having you aboard.",
		},
		host: "65fdfa2a3411e9ebc83d4cfa",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "sophie@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Take advantage of optional sailing trips along the French Riviera.",
	},
	////////////////////////
	{
		title: "Charming B&B in the English Countryside",
		favorite: false,
		views: "Islands",
		propertyType: "Bed and breakfast",
		location: "Cotswolds, UK - Rural setting",
		description:
			"Escape to the idyllic English countryside and experience warm hospitality at this charming bed and breakfast. Surrounded by picturesque landscapes and quaint villages.",
		accommodation: {
			bedrooms: 4,
			bathrooms: 4,
			guests: 8,
		},
		size: "3,000 square feet",
		layout:
			"Comfortable guest rooms with ensuite bathrooms, cozy common areas, and a beautiful garden",
		amenities: {
			essential: ["Free Wi-Fi", "Heating"],
			outdoor: ["Garden", "Patio", "Outdoor seating"],
		},
		photos: [
			"/images/bread&breakfast/bread&breakfast_1jpg",
			"/images/bread&breakfast/bread&breakfast_2jpg",
			"/images/bread&breakfast/bread&breakfast_3jpg",
			"/images/bread&breakfast/bread&breakfast_4jpg",
			"/images/bread&breakfast/bread&breakfast_5jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-08-01", "2024-08-02", "2024-08-03"],
		},
		pricing: {
			priceAfterTax: "$141",
			priceBeforeTax: "$111",
			cleaningFee: "$30",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.9,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"Absolutely delightful! Wonderful hosts and a beautiful property.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment: "A perfect retreat in the countryside. Highly recommend!",
				},
			],
			hostResponse:
				"Thank you for your lovely review! We're delighted that you enjoyed your stay.",
		},
		host: "65fdfa2a3411e9ebc83d4cfb",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "emma@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore nearby hiking trails, historic landmarks, and charming villages.",
	},
	//////////////////////////
	{
		title: "Unique Dome Retreat in the Desert",
		favorite: true,
		views: "Beachfront",
		propertyType: "dome",
		location: "Joshua Tree, CA - Desert landscape",
		description:
			"Escape to this unique dome retreat nestled in the scenic desert landscape of Joshua Tree. Perfect for stargazing and experiencing the beauty of nature.",
		accommodation: {
			bedrooms: 1,
			bathrooms: 1,
			guests: 2,
		},
		size: "400 square feet",
		layout:
			"Cozy living space with a comfortable bed, kitchenette, and panoramic views",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],
			outdoor: ["Private patio", "Outdoor seating", "Fire pit"],
		},
		photos: [
			"/images/dome/dome_1.jpg",
			"/images/dome/dome_2.jpg",
			"/images/dome/dome_3.jpg",
			"/images/dome/dome_4.jpg",
			"/images/dome/dome_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-09-01", "2024-09-02", "2024-09-03"],
		},
		pricing: {
			priceAfterTax: "$263",
			priceBeforeTax: "$255",
			cleaningFee: "$25",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Respect the desert environment",
		],
		reviews: {
			starRating: 4.6,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"Incredible experience! The dome is truly unique and the views are breathtaking.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"A magical retreat in the desert. Highly recommend for a peaceful getaway.",
				},
			],
			hostResponse:
				"Thank you for your wonderful review! We're thrilled that you enjoyed your stay.",
		},
		host: "65fdfa2a3411e9ebc83d4cfc",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "mark@example.com",
			},
			checkInOut: "Check-in: 4 PM, Check-out: 10 AM",
		},
		additionalInfo:
			"Enjoy hiking, rock climbing, and starlit nights in Joshua Tree National Park.",
	},
	/////////////////////////
	{
		title: "Historic Tower in Tuscany",
		favorite: true,
		views: "Design",
		propertyType: "tower",
		location: "Florence, Italy - Tuscan countryside",
		description:
			"Immerse yourself in history and romance at this beautifully restored historic tower in the heart of the Tuscan countryside. Enjoy panoramic views of the surrounding vineyards and olive groves.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 1,
			guests: 4,
		},
		size: "800 square feet",
		layout:
			"Three levels of living space including bedrooms, a cozy living room, and a rooftop terrace",
		amenities: {
			essential: ["Free Wi-Fi", "Heating"],
			outdoor: ["Rooftop terrace", "Outdoor seating"],
		},
		photos: [
			"/images/tower/tower_1.jpg",
			"/images/tower/tower_2.jpg",
			"/images/tower/tower_3.jpg",
			"/images/tower/tower_4.jpg",
			"/images/tower/tower_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-10-01", "2024-10-02", "2024-10-03"],
		},
		pricing: {
			priceAfterTax: "$1,126",
			priceBeforeTax: "$1,095",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Respect the historic property",
		],
		reviews: {
			starRating: 4.9,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"A truly magical experience! The tower exceeded all expectations.",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment:
						"Stunning views and charming accommodations. Would love to visit again!",
				},
			],
			hostResponse:
				"Thank you for your kind words! We're delighted that you enjoyed your stay at our historic tower.",
		},
		host: "65fdfa2a3411e9ebc83d4cfd",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "giulia@example.com",
			},
			checkInOut: "Check-in: 2 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Experience wine tasting tours, cooking classes, and cultural excursions in the nearby towns of Florence and Siena.",
	},
	////////////////////
	{
		title: "Luxury Boutique Hotel in Manhattan",
		favorite: false,
		views: "Cabins",
		propertyType: "Hotel",
		location: "New York City, NY - Manhattan",
		description:
			"Indulge in luxury and sophistication at this boutique hotel located in the heart of Manhattan. Experience impeccable service, stylish accommodations, and unparalleled views of the city skyline.",
		accommodation: {
			bedrooms: 50,
			bathrooms: 50,
			guests: 100,
		},
		size: "Varies by room type",
		layout: "Elegant guest rooms with modern amenities and chic decor",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Air conditioning"],
			outdoor: ["Room service", "Concierge", "Valet parking"],
		},
		photos: [
			"/images/hotels/hotel_1.jpg",
			"/images/hotels/hotel_2.jpg",
			"/images/hotels/hotel_3.jpg",
			"/images/hotels/hotel_4.jpg",
			"/images/hotels/hotel_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-11-01", "2024-11-02", "2024-11-03"],
		},
		pricing: {
			priceAfterTax: "$126",
			priceBeforeTax: "$100",
			cleaningFee: "$12",
			taxes: "Applicable taxes and fees",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Check-in: 3 PM, Check-out: 12 PM",
		],
		reviews: {
			starRating: 4.7,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"Exceptional service and elegant accommodations. Will definitely return!",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"An unforgettable stay in the heart of the city. Highly recommend!",
				},
			],
			hostResponse:
				"Thank you for choosing our hotel! We're thrilled that you enjoyed your stay and look forward to welcoming you back.",
		},
		host: "65fdfa2a3411e9ebc83d4cfe",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "erik@example.com",
			},
			checkInOut: "Check-in: 2 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Located within walking distance of top attractions, shopping, and dining destinations.",
	},
	//////////////////////////
	{
		title: "Charming Houseboat on Amsterdam Canals",
		favorite: false,
		views: "Campers",
		propertyType: "houseboat",
		location: "Amsterdam, Netherlands - Canal district",
		description:
			"Experience the unique charm of Amsterdam from the comfort of this cozy houseboat located on the picturesque canals. Enjoy stunning views, peaceful surroundings, and easy access to the city's attractions.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 1,
			guests: 4,
		},
		size: "600 square feet",
		layout: "Living area, kitchenette, bedrooms, and outdoor deck",
		amenities: {
			essential: ["Free Wi-Fi", "Heating"],
			outdoor: [],
		},
		photos: [
			"/images/boat-house/boat-house_1.jpg",
			"/images/boat-house/boat-house_2.jpg",
			"/images/boat-house/boat-house_3.jpg",
			"/images/boat-house/boat-house_4.jpg",
			"/images/boat-house/boat-house_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2024-12-01", "2024-12-02", "2024-12-03"],
		},
		pricing: {
			priceAfterTax: "$247",
			priceBeforeTax: "$240",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.8,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"A truly unique experience! The houseboat was charming and comfortable.",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment:
						"Fantastic location and cozy accommodations. Loved watching the boats go by!",
				},
			],
			hostResponse:
				"Thank you for your kind words! We're delighted that you enjoyed your stay aboard our houseboat.",
		},
		host: "65fdfa2a3411e9ebc83d4cfa",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "erik@example.com",
			},
			checkInOut: "Check-in: 2 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore Amsterdam's iconic landmarks, museums, and vibrant neighborhoods from your unique floating home.",
	},
	///////////////////////
	{
		title: "Secluded Glamping Tent in the Redwoods",
		favorite: true,
		views: "Amazing Pools",
		propertyType: "tent",
		location: "Big Sur, California - Redwood forest",
		description:
			"Experience the beauty of nature in comfort at this secluded glamping tent nestled in the majestic Redwood forest. Enjoy peaceful surroundings, starlit nights, and outdoor adventures.",
		accommodation: {
			bedrooms: 1,
			bathrooms: 1,
			guests: 2,
		},
		size: "200 square feet",
		layout:
			"Cozy tent with a comfortable bed, outdoor seating area, and access to shared facilities",
		amenities: {
			essential: ["Comfy bed", "Outdoor seating"],
			outdoor: ["Shared bathroom", "Fire pit"],
		},
		photos: [
			"/images/tent/tent_1.jpg",
			"/images/tent/tent_2.jpg",
			"/images/tent/tent_3.jpg",
			"/images/tent/tent_4.jpg",
			"/images/tent/tent_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-01-01", "2025-01-02", "2025-01-03"],
		},
		pricing: {
			priceAfterTax: "$381",
			priceBeforeTax: "$352",
			cleaningFee: "$20",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.7,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"A magical experience! The tent was cozy and the surroundings were breathtaking.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"Perfect getaway in the Redwoods. Highly recommend for nature lovers!",
				},
			],
			hostResponse:
				"Thank you for your lovely review! We're delighted that you enjoyed your glamping experience.",
		},
		host: "65fdfa2a3411e9ebc83d4cfb",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "sarah@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore nearby hiking trails, scenic overlooks, and wildlife spotting opportunities.",
	},
	//////////////////////
	{
		title: "Enchanting Treehouse Retreat in the Forest",
		favorite: true,
		views: "OMG!",
		propertyType: "treehouse",
		location: "Bali, Indonesia - Ubud",
		description:
			"Escape to this enchanting treehouse retreat nestled in the lush forest of Ubud. Experience a magical stay surrounded by nature, with stunning views and tranquil surroundings.",
		accommodation: {
			bedrooms: 1,
			bathrooms: 1,
			guests: 2,
		},
		size: "300 square feet",
		layout:
			"Cozy treehouse with a comfortable bed, outdoor seating area, and access to shared facilities",
		amenities: {
			essential: ["Comfy bed", "Outdoor seating"],
			outdoor: ["Shared bathroom", "Balcony with forest views"],
		},
		photos: [
			"/images/treehouse/treehouse_1.jpg",
			"/images/treehouse/treehouse_2.jpg",
			"/images/treehouse/treehouse_3.jpg",
			"/images/treehouse/treehouse_4.jpg",
			"/images/treehouse/treehouse_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-02-01", "2025-02-02", "2025-02-03"],
		},
		pricing: {
			priceAfterTax: "$1,250",
			priceBeforeTax: "$1,100",
			cleaningFee: "$30",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Respect the forest environment",
		],
		reviews: {
			starRating: 4.9,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"Absolutely magical! The treehouse was even more beautiful than in the pictures.",
				},
				{
					username: "Guest2",
					rating: 4.5,
					comment:
						"A truly unforgettable experience. Loved waking up to the sounds of the forest.",
				},
			],
			hostResponse:
				"Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our treehouse retreat.",
		},
		host: "65fdfa2a3411e9ebc83d4cfc",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "wayan@example.com",
			},
			checkInOut: "Check-in: 2 PM, Check-out: 10 AM",
		},
		additionalInfo:
			"Enjoy guided forest walks, yoga sessions, and traditional Balinese cuisine during your stay.",
	},
	//////////////////////////
	{
		title: "Serene Yurt Retreat in the Mountains",
		favorite: false,
		views: "Arctic",
		propertyType: "yurt",
		location: "Asheville, North Carolina - Blue Ridge Mountains",
		description:
			"Escape to this serene yurt retreat nestled in the picturesque Blue Ridge Mountains. Experience peace and tranquility surrounded by nature, with stunning views and outdoor adventures.",
		accommodation: {
			bedrooms: 1,
			bathrooms: 1,
			guests: 2,
		},
		size: "200 square feet",
		layout:
			"Cozy yurt with a comfortable bed, outdoor seating area, and access to shared facilities",
		amenities: {
			essential: ["Comfy bed", "Outdoor seating"],
			outdoor: ["Shared bathroom", "Fire pit"],
		},
		photos: [
			"/images/yurts/yurt_1.jpg",
			"/images/yurts/yurt_2.jpg",
			"/images/yurts/yurt_3.jpg",
			"/images/yurts/yurt_4.jpg",
			"/images/yurts/yurt_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-03-01", "2025-03-02", "2025-03-03"],
		},
		pricing: {
			priceAfterTax: "$475",
			priceBeforeTax: "$420",
			cleaningFee: "$20",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.6,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"A magical experience! The yurt was cozy and the surroundings were breathtaking.",
				},
				{
					username: "Guest2",
					rating: 4.7,
					comment:
						"Perfect retreat in the mountains. Loved the peaceful ambiance and beautiful views!",
				},
			],
			hostResponse:
				"Thank you for your lovely review! We're delighted that you enjoyed your stay at our yurt retreat.",
		},
		host: "65fdfa2a3411e9ebc83d4cfd",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "emily@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore nearby hiking trails, waterfalls, and scenic overlooks in the Blue Ridge Mountains.",
	},
	////////////////////
	{
		title: "Enchanting Castle Stay in the Scottish Highlands",
		favorite: false,
		views: "Castles",
		propertyType: "castle",
		location: "Inverness, Scotland - Highland region",
		description:
			"Step back in time and live like royalty at this enchanting castle nestled in the stunning Scottish Highlands. Immerse yourself in history, elegance, and breathtaking landscapes.",
		accommodation: {
			bedrooms: 8,
			bathrooms: 6,
			guests: 16,
		},
		size: "10,000 square feet",
		layout:
			"Grand reception rooms, elegant bedrooms, spacious grounds, and panoramic views",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Fireplaces"],
			outdoor: ["Gardens", "Terraces", "Private lake"],
		},
		photos: [
			"/images/castles/castle_1.jpg",
			"/images/castles/castle_2.jpg",
			"/images/castles/castle_3.jpg",
			"/images/castles/castle_4.jpg",
			"/images/castles/castle_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-04-01", "2025-04-02", "2025-04-03"],
		},
		pricing: {
			priceAfterTax: "$1,126",
			priceBeforeTax: "$1,100",
			cleaningFee: "$200",
			taxes: "Applicable taxes",
		},
		houseRules: [
			"No smoking",
			"No pets allowed",
			"Respect the historic property",
		],
		reviews: {
			starRating: 4.9,
			guestReviews: [
				{
					username: "Guest1",
					rating: 5,
					comment:
						"A truly unforgettable experience! The castle exceeded all expectations.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"Absolutely magical! Every detail of the castle is exquisite.",
				},
			],
			hostResponse:
				"Thank you for your wonderful review! We're delighted that you enjoyed your stay at our castle.",
		},
		host: "65fdfa2a3411e9ebc83d4cfe",
		bookingInfo: {
			bookingOptions: "Request to book",
			contactInfo: {
				phone: "123-456-7890",
				email: "william@example.com",
			},
			checkInOut: "Check-in: 4 PM, Check-out: 10 AM",
		},
		additionalInfo:
			"Enjoy guided tours of the castle, explore nearby hiking trails, and visit historic landmarks.",
	},
	/////////////////////
	{
		title: "Cozy Mountain Cabin with Stunning Views",
		favorite: false,
		views: "Tropical",
		propertyType: "cabin",
		location: "Banff, Alberta - Canadian Rockies",
		description:
			"Escape to this cozy mountain cabin nestled in the breathtaking Canadian Rockies. Enjoy panoramic views, serene surroundings, and access to outdoor adventures year-round.",
		accommodation: {
			bedrooms: 2,
			bathrooms: 1,
			guests: 4,
		},
		size: "800 square feet",
		layout:
			"Rustic cabin with a spacious living area, fireplace, fully equipped kitchen, and outdoor deck",
		amenities: {
			essential: ["Free Wi-Fi", "Heating", "Fireplace"],
			outdoor: ["Deck with mountain views", "Fire pit", "Hiking trails nearby"],
		},
		photos: [
			"/images/tropical/tropical_1.jpg",
			"/images/tropical/tropical_2.jpg",
			"/images/tropical/tropical_3.jpg",
			"/images/tropical/tropical_4.jpg",
			"/images/tropical/tropical_5.jpg",
		],
		availability: {
			calendar: "Available dates for booking",
			bookedDates: ["2025-05-01", "2025-05-02", "2025-05-03"],
		},
		pricing: {
			priceAfterTax: "$570",
			priceBeforeTax: "$520",
			cleaningFee: "$50",
			taxes: "Applicable taxes",
		},
		houseRules: ["No smoking", "No pets allowed", "Quiet hours after 10 PM"],
		reviews: {
			starRating: 4.8,
			guestReviews: [
				{
					username: "Guest1",
					rating: 4.5,
					comment:
						"A perfect mountain retreat! The cabin was cozy and the views were spectacular.",
				},
				{
					username: "Guest2",
					rating: 5,
					comment:
						"Absolutely stunning! The cabin exceeded all expectations and the surroundings were breathtaking.",
				},
			],
			hostResponse:
				"Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our mountain cabin.",
		},
		host: "65fdfa2a3411e9ebc83d4cfa",
		bookingInfo: {
			bookingOptions: "Instant book available",
			contactInfo: {
				phone: "123-456-7890",
				email: "sophie@example.com",
			},
			checkInOut: "Check-in: 3 PM, Check-out: 11 AM",
		},
		additionalInfo:
			"Explore nearby national parks, lakes, and scenic drives in the Canadian Rockies.",
	},
];

export default listings;
