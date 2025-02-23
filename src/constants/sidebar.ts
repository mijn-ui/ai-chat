import { ERPCategories } from "@/types";

type SidebarDefualtItemsType = Pick<
	ERPCategories,
	"id" | "icon" | "title" | "url"
>;

export const SIDEBAR_DEFAULT_ITEMS: SidebarDefualtItemsType[] = [
	{
		id: "sidebar-item-0",
		icon: "database",
		title: "Upload Data",
		url: "upload"
	},
	{
		id: "sidebar-item-1",
		icon: "mail",
		title: "Email",
		url: "email"
	},
	{
		id: "sidebar-item-2",
		icon: "code",
		title: "Code",
		url: "code"
	}
];
