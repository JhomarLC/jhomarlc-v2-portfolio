import { Card } from "@/components/ui/card";
import {
	Award,
	Bolt,
	CircleUserRound,
	Facebook,
	GithubIcon,
	GraduationCap,
	Info,
	InstagramIcon,
	LinkedinIcon,
} from "lucide-react";
import EducationTimeline from "./EducationTimeline";
import ExperiencesTimeline from "./ExperiencesTimeline";
import About from "./About";
import Technologies from "./Technologies";
import { Button } from "@/components/ui/button";

const Main = () => {
	const social_links = [
		{
			name: "Github",
			link: "https://github.com/JhomarLC",
			icon: <GithubIcon />,
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/jhomar-candelario-7b84a7316/",
			icon: <LinkedinIcon />,
		},
		{
			name: "Facebook",
			link: "https://www.facebook.com/j.cndlr/",
			icon: <Facebook />,
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/j.cndlr/",
			icon: <InstagramIcon />,
		},
	];
	return (
		<div className="max-w-lg md:max-w-4xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
				<Card className="w-full px-5 md:col-span-2">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<Info />
						About Me
					</h1>
					<About />
				</Card>
				<Card className="w-full px-5">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<GraduationCap />
						Education
					</h1>
					<EducationTimeline />
				</Card>

				<Card className="w-full px-5 md:col-span-2">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<Award />
						Achievements and Experiences
					</h1>
					<ExperiencesTimeline />
				</Card>
				<div className="w-full flex flex-col gap-4">
					<Card className="w-full px-5">
						<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
							<Bolt />
							Technologies
						</h1>
						<Technologies />
					</Card>
					<Card className="w-full px-5 pb-5">
						<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
							<CircleUserRound />
							Contact Me
						</h1>
						<p className="text-sm text-gray-600 text-justify">
							Whether you have a question, a project idea, or just
							want to connect, I&apos;d love to hear from you.
						</p>
						<div className="mt-4 grid grid-cols-2 gap-2">
							{social_links.map((social, i) => (
								<a
									href={social.link}
									target="_blank"
									rel="noopener noreferrer"
									key={i}
									className=""
								>
									<Button className="w-full rounded-sm">
										{social.icon} {social.name}
									</Button>
								</a>
							))}
						</div>

						<div className="mt-4">
							<p className="text-sm text-gray-500 text-justify">
								Looking forward to connecting with you!
							</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Main;
