import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { cn } from "@mijn-ui/react-theme";
import Logo from "@/components/layout/logo";
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
				"relative flex size-full flex-col overflow-y-auto",
				className
			)}>
			<ChatPanelHeader
				toggleOpen={toggleOpen}
				className={cn(
					"sticky inset-x-0 top-0 bg-card/95 pb-2 backdrop-blur-[3px] lg:pt-3",
					"lg:rounded-l-large"
				)}
			/>

			<div className="custom_scroll_bar flex w-full flex-col items-start gap-1 space-y-4 overflow-y-auto px-4">
				<div className="relative w-full">
					<Label className="sticky top-0 block w-full bg-card py-1 text-xs font-semibold text-muted-foreground">
						Previous 7 Days
					</Label>

					<ol className="flex flex-col">
						{Array.from({ length: 8 }).map((_, index) => (
							<Button
								asChild
								key={index}
								className="min-w-0 shrink-0 cursor-pointer justify-start px-2"
								size="sm"
								variant="ghost">
								<li>
									<span className="block truncate">
										How Many orders do we have.
									</span>
								</li>
							</Button>
						))}
					</ol>
				</div>

				<div className="relative w-full">
					<Label className="sticky top-0 block w-full bg-card py-1 text-xs font-semibold text-muted-foreground">
						Previous 30 Days
					</Label>

					<ol className="flex flex-col">
						{Array.from({ length: 8 }).map((_, index) => (
							<Button
								asChild
								key={index}
								className="min-w-0 shrink-0 cursor-pointer justify-start px-2"
								size="sm"
								variant="ghost">
								<li>
									<span className="block truncate">
										Products during the last month.
									</span>
								</li>
							</Button>
						))}
					</ol>
				</div>

				<div className="relative w-full">
					<Label className="sticky top-0 block w-full bg-card py-1 text-xs font-semibold text-muted-foreground">
						January
					</Label>

					<ol className="flex flex-col">
						{Array.from({ length: 8 }).map((_, index) => (
							<Button
								asChild
								key={index}
								className="min-w-0 shrink-0 cursor-pointer justify-start px-2"
								size="sm"
								variant="ghost">
								<li>
									<span className="block truncate">
										Chat Discussion With Customers.
									</span>
								</li>
							</Button>
						))}
					</ol>
				</div>
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

				<Logo className="hidden lg:flex" />

				<Button size="sm" iconOnly radius="full">
					<FiEdit className="-mr-0.5 -mt-0.5" />
				</Button>
			</div>
		</>
	);
};

export default ChatPanel;
