import { notFound } from "next/navigation";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { fetchCategories, fetchCategory } from "@/lib/api";
import { SidebarDialog, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/app-sidebar";
import PageWrapper from "@/components/layout/page-wrapper";
import RenderOnScreen from "@/components/render-on-screen";
import ChatHeader from "@/features/chat/components/chat-header";
import {
	ChatLayoutProvider,
	ChatResizableContent,
	ChatResizableGroup,
	ChatResizablePanel
} from "@/features/chat/components/chat-layout";
import ChatPanel from "@/features/chat/components/chat-panel";
import { ERPCategory } from "@/types";

export async function generateMetadata({
	params
}: {
	params: Promise<{ category: string }>;
}) {
	const { category } = await params;
	const { category: categoryData } = await fetchCategory(category);

	if (!categoryData) {
		notFound();
	}

	return { title: categoryData.title };
}

export async function generateStaticParams() {
	const categories = await fetchCategories();

	return categories.map((category: ERPCategory) => ({
		category: category.url
	}));
}

export default async function CategoryLayout({
	params,
	children
}: {
	params: Promise<{ category: string }>;
	children: React.ReactNode;
}) {
	const { category: categoryParams } = await params;

	const { category } = await fetchCategory(categoryParams);

	if (!category) {
		notFound();
	}

	return (
		<ChatLayoutProvider
			// defaultPanelOpen={defaultPanelOpen}
			className="relative flex h-full bg-background">
			<AppSidebar className="hidden lg:block" />

			<SidebarInset className="lg:px-1 lg:py-4">
				<PageWrapper scrollable={false}>
					<RenderOnScreen screen="desktop">
						<ChatResizableGroup>
							<ChatResizablePanel>
								<ChatPanel category={category} />
							</ChatResizablePanel>
							<ChatResizableContent>
								<ChatHeader />
								{children}
							</ChatResizableContent>
						</ChatResizableGroup>
					</RenderOnScreen>

					<RenderOnScreen screen="below-desktop">
						<SidebarDialog>
							<AppSidebar className="border-r bg-card" />
							<ChatPanel category={category} />
						</SidebarDialog>

						<ChatHeader title={category.title} />
						<ScrollArea className="relative flex size-full flex-col items-center justify-center gap-2">
							{children}
						</ScrollArea>
					</RenderOnScreen>
				</PageWrapper>
			</SidebarInset>
		</ChatLayoutProvider>
	);
}
