import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";

export function Quotes() {
	return (
		<Card className="p-5">
			<AlertTitle>Benjamin Franklin</AlertTitle>
			<AlertDescription className="italic">
				&quot; An investment in knowledge pays the best interest. &quot;
			</AlertDescription>
		</Card>
	);
}
