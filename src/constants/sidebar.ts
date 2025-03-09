import { ERPCategory } from "@/types";

type SidebarDefualtItemsType = Pick<
	ERPCategory,
	"id" | "icon" | "title" | "url"
>;

const email = "pico-sbs@example.com";
const subject = "Hello!";
const body = "I wanted to reach out to you.";

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const SIDEBAR_DEFAULT_ITEMS: SidebarDefualtItemsType[] = [
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
		url: mailtoLink
	},
	{
		id: "sidebar-item-2",
		icon: "code",
		title: "Code",
		url: "#"
	}
];
