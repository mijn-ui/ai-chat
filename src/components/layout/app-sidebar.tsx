"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@mijn-ui/react-separator";
import { cn } from "@mijn-ui/react-theme";
import { useQuery } from "@tanstack/react-query";
import { IconMap } from "@/constants/icon-maps";
import { SIDEBAR_DEFAULT_ITEMS } from "@/constants/sidebar";
import { categoriesQueryOptions } from "@/lib/query-options/categories-query-options";
import { useActivePathSegment } from "@/hooks/use-active-path-segment";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton
} from "@/components/ui/sidebar";
import { CATEGORY_ICON_TYPE, ERPChat } from "@/types";

const AppSidebar = ({ className }: { className?: string }) => {
	const { data: categories, isPending } = useQuery(categoriesQueryOptions());

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
						<SidebarMenuItems
							loading={isPending}
							items={SIDEBAR_DEFAULT_ITEMS}
						/>
						<Separator className="my-1" />
						<SidebarMenuItems loading={isPending} items={categories} />
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

/* -------------------------------------------------------------------------- */

type SidebarMenuItemsProps = {
	items?: {
		id: string;
		title: string;
		icon: CATEGORY_ICON_TYPE;
		url: string;
		chats?: ERPChat[];
	}[];
	loading?: boolean;
};

const SidebarMenuItems = ({ items, loading }: SidebarMenuItemsProps) => {
	const activePath = useActivePathSegment();

	if (loading) {
		return (
			<>
				<div className="size-8 animate-pulse rounded-medium bg-muted" />
				<div className="size-8 animate-pulse rounded-medium bg-muted" />
				<div className="size-8 animate-pulse rounded-medium bg-muted" />
				<div className="size-8 animate-pulse rounded-medium bg-muted" />
			</>
		);
	}

	if (!items) return null;

	return (
		<>
			{items.map(({ id, icon, title, url, chats }) => {
				const Icon = IconMap[icon];
				const link =
					!Array.isArray(chats) || !chats.length
						? `/${url}`
						: `/${url}/${chats[0].id}`;

				return (
					<SidebarMenuButton
						asChild
						key={id}
						tooltip={title}
						active={activePath === url}>
						<Link href={link}>
							<Icon />
						</Link>
					</SidebarMenuButton>
				);
			})}
		</>
	);
};

export default AppSidebar;
