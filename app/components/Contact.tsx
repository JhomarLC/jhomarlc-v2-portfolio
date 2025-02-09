import { Button } from "@/components/ui/button";
import {
	Facebook,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "lucide-react";

const Contact = () => {
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
		<>
			<p className="text-sm text-gray-600 text-justify">
				Whether you have a question, a project idea, or just want to
				connect, I&apos;d love to hear from you.
			</p>
			<div className="mt-4 grid grid-cols-2 gap-2">
				{social_links.map((social, i) => (
					<a
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						key={i}
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
		</>
	);
};

export default Contact;
