"use client";

import React, { useCallback } from "react";
import { LuPanelLeft } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import { useControlledState } from "@mijn-ui/react-hooks";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { cn } from "@mijn-ui/react-theme";
import { createContext } from "@mijn-ui/react-utilities";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizeable";
import { SidebarProvider } from "@/components/ui/sidebar";

export const CHAT_LAYOUT_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const CHAT_LAYOUT_COOKIE_NAME = "chatPanel:state";

/* -------------------------------------------------------------------------- */

type ChatLayoutContextType = {
	panelOpen: boolean;
	onPanelOpenChange: (open: boolean) => void;
};

const [ChatLayoutContextProvider, useChatLayoutContext] =
	createContext<ChatLayoutContextType>({
		name: "ChatLayoutContext",
		strict: true,
		errorMessage:
			"useChatLayoutContext: `context` is undefined. Ensure the component is wrapped within <ChatLayoutProvider />"
	});

/* -------------------------------------------------------------------------- */
/*                             ChatLayoutProvider                             */
/* -------------------------------------------------------------------------- */

type ChatLayoutProviderProps = {
	panelOpen?: boolean;
	onPanelOpenChange?: (open: boolean) => void;
	defaultPanelOpen?: boolean;
	children: React.ReactNode;
	className?: string;
};

const ChatLayoutProvider = ({
	panelOpen,
	onPanelOpenChange,
	defaultPanelOpen = true,
	children,
	className
}: ChatLayoutProviderProps) => {
	const [open, _setOpen] = useControlledState(
		panelOpen,
		defaultPanelOpen,
		onPanelOpenChange
	);

	const setOpen = useCallback((open: boolean) => {
		document.cookie = `${CHAT_LAYOUT_COOKIE_NAME}=${open}; path=/; max-age=${CHAT_LAYOUT_COOKIE_MAX_AGE}; SameSite=None; Secure`;
		_setOpen(open);
	}, []);

	return (
		<ChatLayoutContextProvider
			value={{ panelOpen: open, onPanelOpenChange: setOpen }}>
			<SidebarProvider
				open={open}
				onOpenChange={setOpen}
				collapsible={false}
				className={cn("group/chatLayout", className)}>
				{" "}
				{children}
			</SidebarProvider>
		</ChatLayoutContextProvider>
	);
};

/* -------------------------------------------------------------------------- */
/*                             ChatResizableGroup                             */
/* -------------------------------------------------------------------------- */

type ChatResizableGroupProps = Omit<
	React.ComponentPropsWithRef<typeof ResizablePanelGroup>,
	"direction"
> & {
	direction?: "horizontal" | "vertical";
};

const ChatResizableGroup = ({ ...props }: ChatResizableGroupProps) => {
	return (
		<ResizablePanelGroup
			autoSaveId="conditional"
			direction="horizontal"
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                          ChatResizablePanelTrigger                         */
/* -------------------------------------------------------------------------- */

const ChatResizablePanelTrigger = ({
	children,
	...props
}: React.ComponentPropsWithRef<typeof Button>) => {
	const { panelOpen, onPanelOpenChange } = useChatLayoutContext();

	return (
		<Button
			size="sm"
			iconOnly
			variant="ghost"
			onClick={() => onPanelOpenChange(!panelOpen)}
			{...props}>
			{children ? (
				children
			) : (
				<>
					<LuPanelLeft />
					<span className="sr-only">Toggle Panel</span>
				</>
			)}
		</Button>
	);
};

/* -------------------------------------------------------------------------- */
/*                             ChatResizablePanel                             */
/* -------------------------------------------------------------------------- */

const ChatResizablePanel = ({
	className,
	...props
}: React.ComponentPropsWithRef<typeof ResizablePanel>) => {
	const { panelOpen } = useChatLayoutContext();

	if (!panelOpen) return null;

	return (
		<>
			<ResizablePanel
				id="left"
				order={1}
				className={cn("relative border-r", className)}
				minSize={12}
				maxSize={24}
				{...props}
			/>
			<ResizableHandle
				className={cn(
					"pointer-events-none relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 lg:block"
				)}
			/>
		</>
	);
};

/* -------------------------------------------------------------------------- */
/*                            ChatResizableContent                            */
/* -------------------------------------------------------------------------- */

const ChatResizableContent = ({ children }: { children: React.ReactNode }) => {
	return (
		<ResizablePanel id="main" order={2}>
			<ScrollArea className="relative flex size-full flex-col items-center justify-center gap-2">
				{children}
			</ScrollArea>
		</ResizablePanel>
	);
};

export {
	useChatLayoutContext,
	ChatLayoutProvider,
	ChatResizableGroup,
	ChatResizablePanel,
	ChatResizablePanelTrigger,
	ChatResizableContent
};
