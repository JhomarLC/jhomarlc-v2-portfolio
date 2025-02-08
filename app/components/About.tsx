import { EmailDialog } from "./EmailDialog";

const About = () => {
	return (
		<>
			<p className="mb-2 text-sm text-justify">
				Hi, I&apos;m <span className="font-bold">Jhomar</span>, an
				aspiring <span className="font-bold">Software Engineer</span>{" "}
				passionate about building web and mobile solutions that make an
				impact. While I&apos;m still in the early stages of my journey,
				I&apos;m continuously learning and honing my skills to turn
				ideas into functional, user-friendly applications.
			</p>
			<p className="mb-2 text-sm text-justify">
				What drives me is the collaborative nature of technology. I love
				working with others, brainstorming creative solutions, and
				bringing projects to life as a team. I believe that great
				software is built through innovation, persistence, and an
				eagerness to learn, which is why I embrace challenges as
				opportunities to grow.
			</p>
			<p className="mb-2 text-sm text-justify">
				My goal is to become a skilled{" "}
				<span className="font-bold">Software Engineer</span>,
				contributing to projects that solve real-world problems. Whether
				it&apos;s developing intuitive user experiences or optimizing
				backend efficiency, I&apos;m always striving to improve and push
				boundaries.
			</p>
			<p className="mb-1 text-sm text-justify">
				Let&apos;s connect! I&apos;m open to collaborations, learning
				opportunities, and exciting projects.
			</p>

			<EmailDialog />
		</>
	);
};

export default About;
