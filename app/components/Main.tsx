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
	return (
		<div className="max-w-lg md:max-w-4xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
				<Card className="w-full px-5">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<GraduationCap />
						Education
					</h1>
					<EducationTimeline />
				</Card>
				<Card className="w-full px-5 md:col-span-2">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<Info />
						About Me
					</h1>
					<About />
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
						<p className="text-sm text-gray-600">
							Whether you have a question, a project idea, or just
							want to connect, I&apos;d love to hear from you.
						</p>
						<div className="mt-4 grid grid-cols-4  gap-2">
							<a
								href="https://www.instagram.com/j.cndlr/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="rounded-sm">
									<InstagramIcon />
								</Button>
							</a>
							<a
								href="https://github.com/JhomarLC"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="rounded-sm">
									<GithubIcon />
								</Button>
							</a>
							<a
								href="https://www.linkedin.com/in/jhomar-candelario-7b84a7316/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="rounded-sm">
									<LinkedinIcon />
								</Button>
							</a>
							<a
								href="https://www.facebook.com/j.cndlr/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="rounded-sm">
									<Facebook />
								</Button>
							</a>
						</div>

						<div className="mt-4">
							<p className="text-sm text-gray-500">
								Looking forward to connecting with you!
							</p>
						</div>
					</Card>
				</div>

				<Card className="w-full px-5 md:col-span-2">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<Award />
						Achievements and Experiences
					</h1>
					<ExperiencesTimeline />
				</Card>
			</div>
		</div>
	);
};

export default Main;
