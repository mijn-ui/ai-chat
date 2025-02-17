"use client";

import { useCallback, useState } from "react";
import PageWrapper from "@/components/layout/page-wrapper";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizeable";
import ChatMain from "./chat-main";
import ChatPanel from "./chat-panel";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const ChatViewPage = ({ defaultPanelOpen }: { defaultPanelOpen?: boolean }) => {
	const [open, setOpen] = useState(defaultPanelOpen);

	const toggleOpen = useCallback(() => {
		setOpen((prev) => {
			document.cookie = `chatPanel:state=${!prev}; path=/; max-age=${COOKIE_MAX_AGE}`;

			return !prev;
		});
	}, []);

	return (
		<PageWrapper scrollable={false}>
			<ResizablePanelGroup autoSaveId="conditional" direction="horizontal">
				{open && (
					<ResizablePanel
						id="left"
						order={1}
						className="border-r"
						defaultSize={90}
						minSize={12}
						maxSize={24}>
						<ChatPanel />
					</ResizablePanel>
				)}
				<ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
				<ResizablePanel id="main" order={2}>
					<ChatMain toggleOpen={toggleOpen} />
				</ResizablePanel>
			</ResizablePanelGroup>
		</PageWrapper>
	);
};

export default ChatViewPage;
