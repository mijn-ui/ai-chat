import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import AppTitle from "./app-title";
import ThemeToggler from "./theme-toggle/theme-toggle";
import { UserNav } from "./user-nav";
import { LuPanelLeft } from "react-icons/lu";
import { cn } from "@mijn-ui/react-theme";

type AppHeaderProps = Omit<React.ComponentProps<"div">, "children">;

const AppHeader = ({ className, ...props }: AppHeaderProps) => {
	return (
		<div
			className={cn(
				"sticky top-0 flex w-full items-center justify-between gap-2 px-4 py-3 text-muted-foreground",
				className
			)}
			{...props}>
			<div className="flex items-center gap-2">
				<SidebarTrigger className="lg:hidden">
					<LuPanelLeft />
				</SidebarTrigger>
				<AppTitle />
			</div>
			<div className="flex items-center gap-2">
				<ThemeToggler variant="ghost" />
				<UserNav />
			</div>
		</div>
	);
};

export default AppHeader;
