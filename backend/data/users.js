import bcrypt from "bcryptjs";

const users = [
	{
		username: "john_doe",
		email: "john.doe@example.com",
		password: "hashed_password_here",
		userType: "client",
		profile: {
			firstName: "John",
			lastName: "Doe",
			avatar: "https://example.com/avatar.jpg",
			bio: "Experienced project manager with a passion for technology.",
			contactInfo: {
				phone: "+1234567890",
				address: "123 Main Street",
				city: "Anytown",
				country: "United States",
				zipCode: "12345",
			},
			skills: ["Project Management", "Team Collaboration", "Problem Solving"],
			experience:
				"Over 10 years of experience in managing software development projects.",
			education: "Bachelor's degree in Computer Science",
		},
		projects: [],
	},
	{
		username: "jane_smith",
		email: "jane.smith@example.com",
		password: "hashed_password_123",
		userType: "client",
		profile: {
			firstName: "Jane",
			lastName: "Smith",
			avatar: "https://example.com/avatar/jane_smith.jpg",
			bio: "Creative designer with a passion for UX/UI.",
			contactInfo: {
				phone: "+1234567890",
				address: "456 Elm Street",
				city: "Sometown",
				country: "United States",
				zipCode: "54321",
			},
			skills: ["UI Design", "UX Research", "Adobe Creative Suite"],
			experience: "5+ years of experience in digital design.",
			education: "Bachelor's degree in Design",
		},
		projects: [],
	},
	{
		username: "tech_pro_123",
		email: "techpro@example.com",
		password: "hashed_password_456",
		userType: "service_provider",
		profile: {
			firstName: "Tech",
			lastName: "Pro",
			avatar: "https://example.com/avatar/tech_pro_123.jpg",
			bio: "Experienced software development team.",
			contactInfo: {
				phone: "+9876543210",
				address: "789 Oak Avenue",
				city: "TechCity",
				country: "United States",
				zipCode: "98765",
			},
			skills: ["Full-stack Development", "Mobile App Development", "DevOps"],
			experience:
				"Team of developers with expertise in a wide range of technologies.",
			education: "Various technical degrees and certifications",
		},
		projects: [],
	},
];

export default users;
