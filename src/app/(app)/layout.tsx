import type { Metadata } from "next";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/app-sidebar";

export const metadata: Metadata = {
	title: "Pico Chat",
	description: "Pico Chatbot from ERP Projects"
};

export default async function Layout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-svh w-full flex-col">
			<SidebarProvider className="relative flex h-full items-center bg-background">
				<AppSidebar className="hidden lg:block" />

				<SidebarInset className="lg:px-1 lg:py-4">{children}</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
