import Image from "next/image";
import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { cn } from "@mijn-ui/react-theme";
import Gradient from "@/components/decorators/gradient";
import { FiEdit } from "react-icons/fi";

const ChatPanel = () => {
	return (
		<div className="relative flex size-full flex-col overflow-y-auto pt-12">
			<ChatPanelHeader className="absolute inset-x-0 top-0 rounded-l-large bg-card/95 pb-1 pt-3 backdrop-blur-[3px]" />

			<div className="custom_scroll_bar flex w-full flex-col items-start gap-1 overflow-y-auto px-4 pb-3 pt-6">
				<Label className="text-xs">Previous 7 Days</Label>

				{Array.from({ length: 24 }).map((_, index) => (
					<Button
						key={index}
						className="w-full min-w-0 shrink-0 justify-start truncate"
						size="sm"
						variant="ghost">
						How Many orders do we have...
					</Button>
				))}
			</div>
		</div>
	);
};

const ChatPanelHeader = ({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) => {
	return (
		<>
			<div
				className={cn(
					"flex w-full items-center justify-between gap-2 px-4 py-3 text-muted-foreground",
					className
				)}
				{...props}>
				<div className="flex items-center gap-2">
					<Image src={"/picosbs.png"} width={24} height={24} alt="picosbs" />
					<p className="text-small">Pico Chat</p>
				</div>
				<Button size="sm" iconOnly radius="full">
					<FiEdit className="-mr-0.5 -mt-0.5" />
				</Button>
			</div>
			<Gradient className="top-10 h-12" />
		</>
	);
};

export default ChatPanel;
