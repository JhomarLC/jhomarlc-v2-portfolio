import { Badge } from "@/components/ui/badge";

const EducationTimeline = () => {
	return (
		<>
			<ol className="relative border-s border-gray-200 dark:border-gray-700">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
						<Badge>2021 - 2025</Badge>
					</time>
					<h3 className="text-md font-semibold text-gray-900 dark:text-white">
						Bachelor of Science in Information Technology
					</h3>
					<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
						Major in Systems Development
					</p>
					<p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
						Central Luzon State University
					</p>
					<a
						href="https://clsu.edu.ph"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
					>
						Visit CLSU{" "}
						<svg
							className="w-3 h-3 ms-2 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</li>
				<li className="mb-5 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
						<Badge variant="secondary">2019 - 2021</Badge>
					</time>
					<h3 className="text-md font-semibold text-gray-900 dark:text-white">
						Humanities and Social Sciences (HUMSS)
					</h3>
					<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
						Senior High School
					</p>
					<p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
						Caanawan National High School
					</p>
				</li>
			</ol>
		</>
	);
};

export default EducationTimeline;
