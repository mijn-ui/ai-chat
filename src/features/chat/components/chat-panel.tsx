import Image from "next/image";
import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { cn } from "@mijn-ui/react-theme";
import Gradient from "@/components/decorators/gradient";
import { FiEdit } from "react-icons/fi";
import { LuX } from "react-icons/lu";

type ChatPanelProps = {
	className?: string;
	toggleOpen?: (open?: boolean) => void;
};
const ChatPanel = ({ toggleOpen, className }: ChatPanelProps) => {
	return (
		<div
			className={cn(
				"relative flex size-full flex-col overflow-y-auto pt-12",
				className
			)}>
			<ChatPanelHeader
				toggleOpen={toggleOpen}
				className={cn(
					"absolute inset-x-0 top-0 bg-card/95 pb-1 pt-3 backdrop-blur-[3px]",
					"lg:rounded-l-lg"
				)}
			/>

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

type ChatPanelHeaderProps = {
	toggleOpen?: (open?: boolean) => void;
} & React.ComponentPropsWithRef<"div">;

const ChatPanelHeader = ({
	toggleOpen,
	className,
	...props
}: ChatPanelHeaderProps) => {
	return (
		<>
			<div
				className={cn(
					"flex w-full items-center justify-between gap-2 px-4 py-3 text-muted-foreground",
					className
				)}
				{...props}>
				<Button
					onClick={() => toggleOpen?.(false)}
					iconOnly
					size="sm"
					radius="full"
					variant="ghost"
					className="lg:hidden">
					<LuX size={16} />
				</Button>
				<div className="hidden items-center gap-2 lg:flex">
					<Image src={"/picosbs.png"} width={24} height={24} alt="picosbs" />
					<p className="text-small">Pico Chat</p>
				</div>
				<Button size="sm" iconOnly radius="full">
					<FiEdit className="-mr-0.5 -mt-0.5" />
				</Button>
			</div>
			<Gradient className="top-12 h-10" />
		</>
	);
};

export default ChatPanel;
