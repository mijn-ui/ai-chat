import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { fetchCategoryData } from "@/lib/api";
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
import ChatMobileSidebar from "@/features/chat/components/chat-mobile-sidebar";
import ChatPanel from "@/features/chat/components/chat-panel";
import { ERPCategory } from "@/types";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const { id } = params;
	const category = await fetchCategoryData(id);

	return { title: category.title };
}

export async function generateStaticParams() {
	const categories = await fetchCategoryData();

	return categories.map((category: ERPCategory) => ({
		category: category.url
	}));
}

export default async function Layout({
	params,
	children
}: {
	params: Promise<{ category: string }>;
	children: React.ReactNode;
}) {
	const { category: categoryParams } = await params;
	const cookieStore = await cookies();
	const defaultPanelOpen = cookieStore.get("chatPanel:state")?.value === "true";

	const category = await fetchCategoryData(categoryParams);

	return (
		<PageWrapper scrollable={false}>
			<ChatLayoutProvider
				defaultPanelOpen={defaultPanelOpen}
				className="size-full">
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
					<ChatMobileSidebar>
						<AppSidebar className="border-r bg-card" />
						<ChatPanel category={category} />
					</ChatMobileSidebar>

					<ChatHeader title={category.title} />
					{children}
				</RenderOnScreen>
			</ChatLayoutProvider>
		</PageWrapper>
	);
}
