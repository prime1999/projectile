"use client";

// import Link from "next/link";
// import { useSelector } from "react-redux";
// import { IoIosArrowForward, IoMdDoneAll } from "react-icons/io";
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";
// import { useGetUserTasksQuery } from "@/redux/slices/TaskSlice";
// import { taskType } from "@/types/TaskType";

const TaskSession = () => {
	// const { userInfo } = useSelector((state: any) => state.auth);
	// console.log(userInfo._id);
	// const tasks = useGetUserTasksQuery({ userId: userInfo._id });
	// console.log(tasks);

	//TODO: Go into a room (the task's room) when a user click on a task
	return (
		<div className="border border-gray-300 rounded-md text-sm p-2 dark:border-none dark:bg-doc bg-cover">
			<h1>TaskSession</h1>
			{/* {tasks.status === "fulfilled" && (
				<>
					<div className="flex items-center justify-between mt-2">
						<h6 className="font-medium">
							Tasks
							<span className="text-sm font-inter border px-2 py-1 border-gray-300 rounded-lg ml-2 dark:bg-dark-300 dark:border-darkBorder">
								{tasks.data && tasks?.data.length}
							</span>
						</h6>
						<Link
							href="/"
							className="flex items-center gap-1 font-inter font-medium duration-300 text-sky-900 hover:text-sky-950 hover:cursor-pointer dark:text-sky-700 dark:hover:text-sky-700"
						>
							See All <IoIosArrowForward />
						</Link>
					</div>
					<div className="mb-2 mt-4">
						{tasks?.data?.map((task: taskType) => (
							<div
								key={task._id}
								className="flex items-center gap-2 border border-gray-300 bg-cover rounded-xl p-2 my-2 dark:bpg-doc dark:border-dark-400 dark:shadow-lg"
							>
								{task.status === "to_do" && (
									<div className="text-xs text-black rounded-full p-2 bg-blue-500">
										<FaPause />
									</div>
								)}
								{task.status === "in_progress" && (
									<div className="text-xs text-black rounded-full p-2 bg-red-400">
										<FaPlay />
									</div>
								)}
								{task.status === "done" && (
									<div className="text-xs text-black rounded-full p-2 bg-sky-600">
										<IoMdDoneAll />
									</div>
								)}
								<div>
									<h6 className="font-poppins font-semibold">{task.title}</h6>
									<p className="truncate text-xs w-[80px]">
										{task.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</>
			)} */}
		</div>
	);
};

export default TaskSession;
