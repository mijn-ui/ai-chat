"use client";

import { cn } from "@mijn-ui/react-theme";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton
} from "../ui/sidebar";
import { LuCloud, LuDatabase } from "react-icons/lu";

const AppSidebar = ({ className }: { className?: string }) => {
	return (
		<Sidebar className={cn("group/sidebar h-full py-4", className)}>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuButton active tooltip="Upload Data">
							<LuDatabase />
						</SidebarMenuButton>
						<SidebarMenuButton tooltip="Weather Chat">
							<LuCloud />
						</SidebarMenuButton>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default AppSidebar;
