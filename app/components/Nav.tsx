import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Nav = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between max-w-lg md:max-w-4xl mx-auto px-4 pt-6 sm:pt-8 gap-3 sm:gap-5">
			<div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto">
				<Image
					src="/formal-jhomarlc.jpg"
					alt="Profile Picture"
					priority={true}
					width={100}
					height={100}
					className="object-cover rounded flex-shrink-0"
				/>
				<div>
					<h1 className="text-lg md:text-2xl font-bold truncate">
						Jhomar L. Candelario
					</h1>
					<p className="text-xs md:text-sm mt-0.5 flex items-center gap-1 mb-1">
						<svg
							className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							></path>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							></path>
						</svg>
						<span className="truncate">
							Nueva Ecija, Philippines
						</span>
					</p>
					<Badge className="mt-1">Software Engineer</Badge>
				</div>
			</div>
			{/* 
			<div className="w-full sm:w-auto flex justify-end sm:justify-start">
				<Quotes />
			</div> */}
		</nav>
	);
};

export default Nav;
