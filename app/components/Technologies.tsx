import { Badge } from "@/components/ui/badge";

const techstacks = [
	{
		name: "Frontend",
		technology: [
			"React.js",
			"React Native",
			"Next JS",
			"Tailwind CSS",
			"Typescript",
			"Vite",
			"Axios",
			"Framer Motion",
		],
	},
	{
		name: "Backend",
		technology: [
			"Laravel",
			"PHP",
			"MySQL",
			"REST API",
			"OAuth",
			"Laravel Sanctum",
		],
	},
	{
		name: "Version Control & Collaboration",
		technology: ["Git", "GitHub", "Bitbucket", "Trello", "Slack"],
	},
	{
		name: "WordPress Tech Stack",
		technology: ["PHP", "WooCommerce", "Elementor", "Cornerstone"],
	},
];

const Technologies = () => {
	return (
		<>
			{techstacks.map((techstack, index) => (
				<div key={index} className="mb-10">
					<h3 className="text-md font-semibold text-gray-900 dark:text-white">
						{techstack.name}
					</h3>

					<div className="flex gap-1 flex-wrap">
						{techstack.technology.map((tech, i) => (
							<Badge key={i} variant="default" className="mt-1">
								{tech}
							</Badge>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default Technologies;
