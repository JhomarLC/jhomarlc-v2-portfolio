import { Card } from "@/components/ui/card";
import {
	Award,
	Bolt,
	CircleUserRound,
	GalleryVerticalEnd,
	GraduationCap,
	Info,
} from "lucide-react";
import EducationTimeline from "./EducationTimeline";
import ExperiencesTimeline from "./ExperiencesTimeline";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
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
						<Contact />
					</Card>
				</div>
				<Card className="w-full px-5 pb-5 md:col-span-3">
					<h1 className="flex gap-2 py-5 text-lg font-bold text-center">
						<GalleryVerticalEnd />
						Latest Projects
					</h1>
					<div className="flex flex-col gap-5">
						<Projects />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Main;
