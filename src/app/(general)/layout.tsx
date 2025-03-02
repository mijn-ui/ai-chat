import {
	SidebarDialog,
	SidebarInset,
	SidebarProvider
} from "@/components/ui/sidebar";
import AppHeader from "@/components/layout/app-header";
import AppSidebar from "@/components/layout/app-sidebar";
import AppTitle from "@/components/layout/app-title";
import PageWrapper from "@/components/layout/page-wrapper";
import RenderOnScreen from "@/components/render-on-screen";

export default function GeneralLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-svh w-full">
			<SidebarProvider
				collapsible={false}
				className="relative flex h-full items-center bg-background">
				<AppSidebar className="hidden lg:block" />
				<RenderOnScreen screen="below-desktop">
					<SidebarDialog>
						<AppSidebar className="border-r bg-card" />
						<div className="flex h-12 w-full items-center justify-start border-b px-4">
							<AppTitle />
						</div>
					</SidebarDialog>
				</RenderOnScreen>

				<SidebarInset className="lg:px-1 lg:py-4">
					<PageWrapper>
						<AppHeader />

						{children}
					</PageWrapper>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
