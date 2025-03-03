import { ChatResizablePanelTrigger } from "./chat-layout";
import { cn } from "@mijn-ui/react-theme";
import ThemeToggler from "@/components/layout/theme-toggle/theme-toggle";
import { UserNav } from "@/components/layout/user-nav";

type ChatHeaderProps = {
	title?: string;
	className?: string;
};

const ChatHeader = ({ className, title }: ChatHeaderProps) => {
	return (
		<div
			className={cn(
				"absolute top-0 flex w-full items-center justify-between gap-2 bg-card/90 px-4 py-3 text-muted-foreground backdrop-blur",
				"z-30",
				className
			)}>
			<div className="flex w-1/2 items-center gap-2">
				<ChatResizablePanelTrigger className="shrink-0" />

				{title && (
					<h3 className="w-full min-w-0 shrink-0 text-small font-semibold lg:hidden">
						<span className="block truncate">{title}</span>
					</h3>
				)}
			</div>

			<div className="flex shrink-0 items-center gap-2">
				<ThemeToggler variant="ghost" />
				<UserNav />
			</div>
		</div>
	);
};

export default ChatHeader;
