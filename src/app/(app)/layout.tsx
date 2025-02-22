import type { Metadata } from "next";
import { cookies } from "next/headers";
import AppSidebar from "@/components/layout/app-sidebar";
import {
	MAIN_LAYOUT_COOKIE_NAME,
	MainLayout,
	MainLayoutProvider
} from "@/components/layout/main-layout/main-layout";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
	title: "Pico Chat",
	description: "Pico Chatbot from ERP Projects"
};

export default async function Layout({
	children
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const defaultPanelOpen =
		cookieStore.get(MAIN_LAYOUT_COOKIE_NAME)?.value === "true";

	return (
		<div className="flex h-svh w-full flex-col">
			<SidebarProvider className="relative flex h-full items-center bg-background">
				<MainLayoutProvider defaultPanelOpen={defaultPanelOpen}>
					<AppSidebar className="hidden lg:block" />

					<SidebarInset className="lg:px-1 lg:py-4">
						<MainLayout>{children}</MainLayout>
					</SidebarInset>
				</MainLayoutProvider>
			</SidebarProvider>
		</div>
	);
}
