"use client";

import {
	SidebarTrigger as MijnUiSidebarTrigger,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton
} from "../ui/sidebar";
import { LuCloud, LuDatabase } from "react-icons/lu";

const AppSidebar = () => {
	return (
		<Sidebar className="group/sidebar h-full py-4">
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
