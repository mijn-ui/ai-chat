import { ERPCategories } from "@/types";

export type SidebarDefaultItemsType = Pick<
	ERPCategories,
	"id" | "title" | "url" | "icon"
>;

export const SIDEBAR_DEFAULT_ITEMS: SidebarDefaultItemsType[] = [
	{
		id: "sidebar-item-0",
		icon: "database",
		title: "Upload Data",
		url: "/upload"
	},
	{
		id: "sidebar-item-1",
		icon: "mail",
		title: "Email",
		url: "/email"
	},
	{
		id: "sidebar-item-2",
		icon: "code",
		title: "Code",
		url: "/code"
	}
];
