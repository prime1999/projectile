type assignee_id = {
	_id: string;
	username: string;
	email: string;
	pic: string;
	userType: string;
	profile: string;
	createdAt: string;
	updatedAt: string;
};

export interface taskType {
	_id: string;
	title: string;
	description: string;
	status: string;
	assignee_id: [assignee_id];
	project_id: string;
	deadline: string;
	createdAt: string;
	updatedAt: string;
}
