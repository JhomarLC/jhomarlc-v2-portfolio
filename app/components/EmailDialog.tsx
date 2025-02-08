"use client";
import { Copy } from "lucide-react";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";

export function EmailDialog() {
	const CopyToClipboard = () => {
		navigator.clipboard
			.writeText("candelario.jhomarl@gmail.com")
			.then(() => {
				toast("Email copied", {
					description:
						"Open your Email Application and send me a message.",
					// action: {
					//   label: "Undo",
					//   onClick: () => console.log("Undo"),
					// },
				});
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="my-5">
					<MailOpen /> Send me an Email
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Copy Email</DialogTitle>
					<DialogDescription>
						Please copy this so you can send me a message.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="link" className="sr-only">
							Email
						</Label>
						<Input
							id="link"
							defaultValue="candelario.jhomarl@gmail.com"
							readOnly
						/>
					</div>
					<Button
						// onClick={() =>
						// 	navigator.clipboard.writeText(
						// 		"candelario.jhomarl@gmail.com"
						// 	)
						// }
						onClick={CopyToClipboard}
						type="submit"
						size="sm"
						className="px-3"
					>
						<span className="sr-only">Copy</span>
						<Copy />
					</Button>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
