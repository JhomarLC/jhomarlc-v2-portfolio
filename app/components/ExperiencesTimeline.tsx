import { Badge } from "@/components/ui/badge";

const experiences = [
	{
		date: "2024 - 2025",
		title: "Technical Warrior",
		company: "Educainventions SL. (SPAIN)",
		location: "Remote Job",
		skills: [
			"PHP",
			"Wordpress",
			"Google Play Store",
			"App Store",
			"Wishpond",
			"API Management",
			"Email Backups",
			"A/B Testing",
		],
	},
	{
		date: "2024",
		title: "1st Runner-up Blockchain Hackathon Programming",
		company: "IRCITE 2024",
		location: "Wesleyan University-Philippines",
		skills: ["Motoko (WEB 3)", "Internet Identity", "React JS"],
	},
	{
		date: "2024",
		title: "Layout Artist",
		company: "The Mechanics",
		location: "Central Luzon State University",
		skills: ["Photoshop", "Illustrator", "Canva"],
	},
	{
		date: "2023",
		title: "Participated in a Programming Challenges",
		company: "IRCITE 2023",
		location: "Bataan Peninsula State University",
		skills: ["Python", "CodeChum"],
	},
	{
		date: "2022 - 2023",
		title: "Public Information Officer | Head Graphic Artist",
		company: "BSIT Council | Graphic Design Team",
		location: "Central Luzon State University",
		skills: ["Team Management", "Photoshop", "Illustrator", "Canva"],
	},
];

const ExperiencesTimeline = () => {
	return (
		<ol className="relative border-s border-gray-200 dark:border-gray-700">
			{experiences.map((experience, index) => (
				<li key={index} className="mb-10 ms-4">
					<div
						className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 ${
							index === 0
								? "bg-gray-900 dark:bg-gray-700"
								: "bg-gray-200 dark:bg-gray-700"
						}`}
					></div>
					<time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
						{/* <Badge variant={index === 0 ? "default" : "secondary"}> */}
						{experience.date}
						{/* </Badge> */}
					</time>
					<h3 className="text-md font-semibold text-gray-900 dark:text-white">
						{experience.title}
					</h3>
					<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
						{experience.company}
					</p>
					<p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
						{experience.location}
					</p>
					<div className="flex gap-1 flex-wrap">
						{experience.skills.map((skill, i) => (
							<Badge key={i} variant="outline" className="mt-1">
								{skill}
							</Badge>
						))}
					</div>
				</li>
			))}
		</ol>
	);
};

export default ExperiencesTimeline;
