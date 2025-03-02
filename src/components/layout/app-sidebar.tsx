import Image from "next/image";
import Link from "next/link";
import { Separator } from "@mijn-ui/react-separator";
import { cn } from "@mijn-ui/react-theme";
import { IconMap } from "@/constants/icon-maps";
import { SIDEBAR_DEFAULT_ITEMS } from "@/constants/sidebar";
import { fetchCategories } from "@/lib/api";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton
} from "@/components/ui/sidebar";
import { CATEGORY_ICON_TYPE, ERPChat } from "@/types";

const AppSidebar = async ({ className }: { className?: string }) => {
	const categories = await fetchCategories();

	return (
		<Sidebar className={cn("h-full", "lg:py-4", className)}>
			<SidebarHeader className="flex h-12 items-center justify-center border-b lg:mx-2">
				<SidebarMenuButton className="p-1.5" asChild>
					<Link href={"/"}>
						<Image
							src={"/picosbs.png"}
							width={24}
							height={24}
							alt="picosbs"
							className="size-full"
						/>
					</Link>
				</SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItems items={SIDEBAR_DEFAULT_ITEMS} />
						<Separator className="my-1" />
						<SidebarMenuItems items={categories} />
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

/* -------------------------------------------------------------------------- */

type SidebarMenuItemsProps = {
	items: {
		id: string;
		title: string;
		icon: CATEGORY_ICON_TYPE;
		url: string;
		chats?: ERPChat[];
	}[];
};

const SidebarMenuItems = ({ items }: SidebarMenuItemsProps) => {
	return items.map(({ id, icon, title, url, chats }) => {
		const Icon = IconMap[icon];
		// Check if the items are default sidebar items or category items.
		// The sidebar default items URL already includes a leading '/', so it doesn't need to be added again.
		const link = !Array.isArray(chats) || !chats.length ? `${url}` : `/${url}`;

		return (
			<SidebarMenuButton asChild key={id} tooltip={title}>
				<Link href={link}>
					<Icon />
				</Link>
			</SidebarMenuButton>
		);
	});
};

export default AppSidebar;
