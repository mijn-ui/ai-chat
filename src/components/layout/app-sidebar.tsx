"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@mijn-ui/react-separator";
import { cn } from "@mijn-ui/react-theme";
import { IconMap } from "@/constants/icon-maps";
import {
	SIDEBAR_DEFAULT_ITEMS,
	SidebarDefaultItemsType
} from "@/constants/sidebar";
import { categoriesQueryOptions } from "@/lib/query-options/categories-query-options";
import { useQuery } from "@tanstack/react-query";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton
} from "../ui/sidebar";

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
						<SidebarMenuItems items={SIDEBAR_DEFAULT_ITEMS} />
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
	loading?: boolean;
	items?: SidebarDefaultItemsType[];
};

const SidebarMenuItems = ({ loading, items }: SidebarMenuItemsProps) => {
	const pathname = usePathname().split("/").filter(Boolean)[0];

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

	return (
		<>
			{items?.map(({ id, icon, title, url }) => {
				const Icon = IconMap[icon];

				return (
					<SidebarMenuButton
						asChild
						key={id}
						tooltip={title}
						active={pathname === url}>
						<Link href={`/${url}`}>
							<Icon />
						</Link>
					</SidebarMenuButton>
				);
			})}
		</>
	);
};

export default AppSidebar;
