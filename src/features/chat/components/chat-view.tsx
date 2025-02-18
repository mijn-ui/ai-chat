"use client";

import { useCallback, useState } from "react";
import { cn } from "@mijn-ui/react-theme";
import AppSidebar from "@/components/layout/app-sidebar";
import PageWrapper from "@/components/layout/page-wrapper";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizeable";
import { useEscapeKeyListener } from "@/hooks/use-escape-key-listener";
import { useIsDesktop } from "@/hooks/use-screen-sizes";
import ChatMain from "./chat-main";
import ChatPanel from "./chat-panel";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const ChatViewPage = ({ defaultPanelOpen }: { defaultPanelOpen?: boolean }) => {
	const [open, setOpen] = useState(defaultPanelOpen);
	const isDesktop = useIsDesktop();

	const toggleOpen = useCallback((open?: boolean) => {
		setOpen((prev) => {
			const newState = open ?? !prev;
			document.cookie = `chatPanel:state=${newState}; path=/; max-age=${COOKIE_MAX_AGE}`;

			return newState;
		});
	}, []);

	// listen the escape key on mobile screen size
	useEscapeKeyListener(() => setOpen(false), !isDesktop);

	return (
		<PageWrapper scrollable={false} className="border bg-card lg:rounded-large">
			{isDesktop ? (
				<ResizablePanelGroup autoSaveId="conditional" direction="horizontal">
					{open && (
						<ResizablePanel
							id="left"
							order={1}
							className="relative border-r"
							defaultSize={90}
							minSize={12}
							maxSize={24}>
							<ChatPanel />
						</ResizablePanel>
					)}
					<ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 lg:block" />
					<ResizablePanel id="main" order={2}>
						<ChatMain toggleOpen={toggleOpen} />
					</ResizablePanel>
				</ResizablePanelGroup>
			) : (
				<>
					{open && (
						<div
							onClick={() => toggleOpen(false)}
							className="fixed inset-0 z-40 bg-overlay/80"
						/>
					)}
					<aside
						className={cn(
							"fixed inset-y-0 z-50 flex w-72 border-r bg-card transition-[left] duration-500 ease-in-out",
							open ? "left-0" : "-left-72"
						)}>
						<AppSidebar className="border-r bg-card pt-2" />
						<ChatPanel toggleOpen={toggleOpen} />
					</aside>
					<ChatMain toggleOpen={toggleOpen} />
				</>
			)}
		</PageWrapper>
	);
};

export default ChatViewPage;
