import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Project Data
const projectData = [
	{
		title: "PAWTECTION: Centralized Mobile and Web Application for Pet Health Record Management System with QR Code for San Jose City Veterinary Office.",
		description:
			"A centralized mobile and web application designed for the San Jose City Veterinary Office to streamline pet health record management, including vaccination and deworming history. It incorporates QR code functionality for quick and secure access to vaccination records, replacing traditional manual methods to improve accuracy, efficiency, and productivity for veterinarians and pet owners alike.",
		image: {
			src: "/pawtection-dekstop-mobile-transparent.png",
			alt: "Pawtection Mobile and Desktop Mockup",
			width: 750,
			height: 500,
		},
		technologies: [
			"Laravel",
			"React JS",
			"React Native",
			"Tailwind CSS",
			"MySQL",
		],
	},
];

const Projects = () => {
	return (
		<>
			{projectData.map((project, index) => (
				<div key={index}>
					<div className="flex flex-col items-center gap-5 justify-center">
						<Image
							src={project.image.src}
							alt={project.image.alt}
							priority={true}
							width={project.image.width}
							height={project.image.height}
							className="object-contain rounded-md"
						/>
					</div>

					<h2 className="text-lg text-gray-900 font-bold text-center leading-relaxed max-w-2xl mx-auto">
						{project.title}
					</h2>

					<div className="flex gap-1 flex-wrap justify-center">
						{project.technologies.map((tech, index) => (
							<Badge
								key={index}
								variant="default"
								className="mt-1"
							>
								{tech}
							</Badge>
						))}
					</div>
					<p className="mt-3 text-md text-gray-700 text-justify leading-relaxed max-w-2xl mx-auto">
						{project.description}
					</p>
					<Separator className="mt-5 max-w-2xl mx-auto" />
				</div>
			))}
		</>
	);
};

export default Projects;
