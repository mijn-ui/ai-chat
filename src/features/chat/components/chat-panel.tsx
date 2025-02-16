import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { FaEdit } from "react-icons/fa";

const ChatPanel = () => {
	return (
		<div className="flex size-full flex-col gap-1 p-4">
			<Button variant="outlined" size="sm" className="w-full text-small">
				<FaEdit />
				New Chat
			</Button>

			<Label className="mb-2 mt-6 text-xs">Previous 7 Days</Label>

			<Button
				className="min-w-0 justify-start truncate"
				size="xs"
				variant="ghost">
				How Many orders do we have...
			</Button>
			<Button
				className="min-w-0 justify-start truncate"
				size="xs"
				variant="ghost">
				How Many orders do we have...
			</Button>
			<Button
				className="min-w-0 justify-start truncate"
				size="xs"
				variant="ghost">
				How Many orders do we have...
			</Button>
			<Button
				className="min-w-0 justify-start truncate"
				size="xs"
				variant="ghost">
				How Many orders do we have...
			</Button>
		</div>
	);
};

export default ChatPanel;
