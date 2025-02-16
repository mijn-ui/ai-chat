import type { Metadata } from "next";
import AppSidebar from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
	title: "RAG CHAT",
	description: "RAG Chatbot from ERP Projects"
};

export default async function AppLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-svh w-full flex-col">
			<Header />

			<SidebarProvider className="relative flex h-full items-center bg-background">
				<AppSidebar />

				<SidebarInset>{children}</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
