import React from "react";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { cn } from "@mijn-ui/react-theme";
import { groupChatsByDate } from "@/constants/fake-erp-categories";
import LinkButton from "@/components/ui/link-button";
import AppTitle from "@/components/layout/app-title";
import { ERPCategory } from "@/types";

type ChatPanelProps = {
	className?: string;
	category: ERPCategory;
};

const ChatPanel = ({ category, className }: ChatPanelProps) => {
	const title = category.title || "Pico Chat";
	const groupedChats = groupChatsByDate(category.chats);

	return (
		<div
			className={cn(
				"relative flex size-full flex-col overflow-y-auto overflow-x-hidden",
				className
			)}>
			<ChatPanelHeader
				title={title}
				newChatUrl={`/${category.url}`}
				className={cn("sticky inset-x-0 top-0 bg-card/95")}
			/>

			<div className="custom_scroll_bar flex w-full flex-col items-start gap-1 space-y-4 overflow-y-auto px-4">
				{groupedChats &&
					groupedChats.map(({ title, group }, index) => (
						<div key={index} className="relative w-full space-y-1">
							<Label className="sticky top-0 block w-full bg-card py-1 text-xs font-semibold text-muted-foreground">
								{title}
							</Label>
							<div className="flex flex-col gap-1">
								{group.map((chat) => {
									return (
										<LinkButton
											key={chat.id}
											className="min-w-0 shrink-0 cursor-pointer justify-start px-2"
											href={`/${category.url}/${chat.id}`}>
											<span className="block truncate">{chat.title}</span>
										</LinkButton>
									);
								})}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
/* -------------------------------------------------------------------------- */
/*                            MainLayoutPanelHeader                           */
/* -------------------------------------------------------------------------- */

type ChatPanelHeaderProps = {
	title: string;
	newChatUrl?: string;
	displayNewChatButton?: boolean;
} & React.ComponentPropsWithRef<"div">;

const ChatPanelHeader = ({
	title,
	className,
	newChatUrl,
	displayNewChatButton = true,
	...props
}: ChatPanelHeaderProps) => {
	return (
		<div className={cn("w-full text-muted-foreground", className)} {...props}>
			<div className="relative flex h-12 w-full items-center border-b px-4 pr-12 lg:mx-4 lg:px-2">
				<AppTitle title={title} />
			</div>

			{displayNewChatButton && newChatUrl && (
				<div className="p-2 lg:px-4 lg:py-3">
					<Button asChild size="sm" className="w-full gap-2" variant="outlined">
						<Link href={newChatUrl}>
							New Chat
							<FiEdit className="-mr-0.5 -mt-0.5" />
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

export default ChatPanel;
