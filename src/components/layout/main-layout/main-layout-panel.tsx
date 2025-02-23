"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMainLayoutContext } from "./main-layout";
import { FiEdit } from "react-icons/fi";
import { LuX } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import { Label } from "@mijn-ui/react-label";
import { cn } from "@mijn-ui/react-theme";
import { useQuery } from "@tanstack/react-query";
import { groupChatsByDate } from "@/constants/fake-erp-categories";
import { SIDEBAR_DEFAULT_ITEMS } from "@/constants/sidebar";
import { categoryQueryOptions } from "@/lib/query-options/categories-query-options";
import { getPathSegment, toCapitalizedWords } from "@/lib/utils";
import { useActivePathSegment } from "@/hooks/use-active-path-segment";
import { ERPChat } from "@/types";

const MainLayoutPanel = () => {
	const { onPanelOpenChange } = useMainLayoutContext();
	const activePath = useActivePathSegment();

	const isDefaultUrl = SIDEBAR_DEFAULT_ITEMS.some(
		(item) => getPathSegment(item.url) === activePath
	);

	const isFetchableUrl = !isDefaultUrl && !!activePath;

	const { data: categories, isLoading } = useQuery(
		// we won't be fetching categories if the current path is a default url
		categoryQueryOptions(activePath, isFetchableUrl)
	);

	const title =
		categories?.title || toCapitalizedWords(activePath) || "Pico Chat";

	return (
		<div className={cn("relative flex size-full flex-col overflow-y-auto")}>
			<MainLayoutPanelHeader
				title={title}
				displayNewChatButton={isFetchableUrl}
				newChatUrl={`/${activePath}`}
				onPanelOpenChange={onPanelOpenChange}
				className={cn(
					"sticky inset-x-0 top-0 bg-card/95",
					"lg:rounded-l-large"
				)}
			/>
			<div className="custom_scroll_bar flex w-full flex-col items-start gap-1 space-y-4 overflow-y-auto px-4">
				<ChatListSection
					loading={isLoading}
					url={categories?.url}
					chats={categories?.chats}
				/>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                            MainLayoutPanelHeader                           */
/* -------------------------------------------------------------------------- */

type MainLayoutPanelHeaderProps = {
	title: string;
	onPanelOpenChange: (open: boolean) => void;
	newChatUrl?: string;
	displayNewChatButton?: boolean;
} & React.ComponentPropsWithRef<"div">;

const MainLayoutPanelHeader = ({
	title,
	onPanelOpenChange,
	className,
	newChatUrl,
	displayNewChatButton,
	...props
}: MainLayoutPanelHeaderProps) => {
	return (
		<div className={cn("w-full text-muted-foreground", className)} {...props}>
			<div className="relative flex h-12 items-center border-b px-4 lg:mx-4 lg:px-2">
				<h5 className="truncate text-small font-semibold text-foreground">
					{title}
				</h5>

				<Button
					onClick={() => onPanelOpenChange(false)}
					iconOnly
					size="sm"
					radius="full"
					variant="ghost"
					className="absolute right-2 top-1 lg:hidden">
					<LuX size={16} />
				</Button>
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

/* -------------------------------------------------------------------------- */
/*                               ChatListSection                              */
/* -------------------------------------------------------------------------- */

type ChatListSectionProps = {
	loading?: boolean;
	chats?: ERPChat[];
	url?: string;
};

const ChatListSection = ({ url, chats, loading }: ChatListSectionProps) => {
	if (loading) {
		return (
			<div className="relative w-full space-y-3">
				<div className="h-3 w-24 animate-pulse rounded-full bg-muted" />
				<div className="flex flex-col gap-2">
					<div className="h-6 w-full animate-pulse rounded-medium bg-muted" />
					<div className="h-6 w-full animate-pulse rounded-medium bg-muted" />
					<div className="h-6 w-full animate-pulse rounded-medium bg-muted" />
					<div className="h-6 w-full animate-pulse rounded-medium bg-muted" />
					<div className="h-6 w-full animate-pulse rounded-medium bg-muted" />
				</div>
			</div>
		);
	}

	if (!chats) return;

	const groupedChats = groupChatsByDate(chats);
	const pathname = usePathname();

	return groupedChats.map(({ title, group }, index) => (
		<div key={index} className="relative w-full space-y-1">
			<Label className="sticky top-0 block w-full bg-card py-1 text-xs font-semibold text-muted-foreground">
				{title}
			</Label>
			<div className="flex flex-col gap-1">
				{group.map((chat, index) => {
					const chatLink = `/${url}/${chat.id}`;

					return (
						<Button
							asChild
							key={index}
							className={cn(
								"min-w-0 shrink-0 cursor-pointer justify-start px-2"
							)}
							color={pathname === chatLink ? "primary" : "default"}
							variant={pathname === chatLink ? "subtle" : "ghost"}
							size="xs">
							<Link href={chatLink}>
								<span className="block truncate">{chat.title}</span>
							</Link>
						</Button>
					);
				})}
			</div>
		</div>
	));
};

export default MainLayoutPanel;
