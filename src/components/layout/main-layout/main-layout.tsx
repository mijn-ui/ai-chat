"use client";

import { useCallback } from "react";
import { useControlledState } from "@mijn-ui/react-hooks";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { cn } from "@mijn-ui/react-theme";
import { createContext } from "@mijn-ui/react-utilities";
import AppSidebar from "@/components/layout/app-sidebar";
import PageWrapper from "@/components/layout/page-wrapper";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizeable";
import { useIsDesktop } from "@/hooks/use-screen-sizes";
import { MainLayoutHeader } from "./main-layout-header";
import MainLayoutPanel from "./main-layout-panel";

export const MAIN_LAYOUT_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const MAIN_LAYOUT_COOKIE_NAME = "layoutPanel:state";

/* -------------------------------------------------------------------------- */

type MainLayoutContextType = {
	panelOpen: boolean;
	onPanelOpenChange: (open: boolean) => void;
};

const [MainLayoutContextProvider, useMainLayoutContext] =
	createContext<MainLayoutContextType>({
		name: "MainLayoutContext",
		strict: true,
		errorMessage:
			"useMainLayoutContext: `context` is undefined. Ensure the component is wrapped within <MainLayoutProvider />"
	});

/* -------------------------------------------------------------------------- */
/*                             MainLayoutProvider                             */
/* -------------------------------------------------------------------------- */

type MainLayoutProviderProps = {
	panelOpen?: boolean;
	onPanelOpenChange?: (open: boolean) => void;
	defaultPanelOpen?: boolean;
	children: React.ReactNode;
};

const MainLayoutProvider = ({
	panelOpen,
	onPanelOpenChange,
	defaultPanelOpen = true,
	children
}: MainLayoutProviderProps) => {
	const [open, _setOpen] = useControlledState(
		panelOpen,
		defaultPanelOpen,
		onPanelOpenChange
	);

	const setOpen = useCallback((open: boolean) => {
		document.cookie =
			document.cookie = `${MAIN_LAYOUT_COOKIE_NAME}=${open}; path=/; max-age=${MAIN_LAYOUT_COOKIE_MAX_AGE}`;
		_setOpen(open);
	}, []);

	return (
		<MainLayoutContextProvider
			value={{ panelOpen: open, onPanelOpenChange: setOpen }}>
			{children}
		</MainLayoutContextProvider>
	);
};

/* -------------------------------------------------------------------------- */
/*                                 MainLayout                                 */
/* -------------------------------------------------------------------------- */

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	const { panelOpen, onPanelOpenChange } = useMainLayoutContext();
	const isDesktop = useIsDesktop();

	return (
		<PageWrapper scrollable={false}>
			{isDesktop ? (
				<ResizablePanelGroup autoSaveId="conditional" direction="horizontal">
					{panelOpen && (
						<ResizablePanel
							id="left"
							order={1}
							className="relative border-r"
							minSize={12}
							maxSize={24}>
							<MainLayoutPanel />
						</ResizablePanel>
					)}
					<ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 lg:block" />
					<ResizablePanel id="main" order={2}>
						<ScrollArea className="relative flex size-full flex-col items-center justify-center gap-2">
							<MainLayoutHeader className="pl-1 lg:pl-0" />
							{children}
						</ScrollArea>
					</ResizablePanel>
				</ResizablePanelGroup>
			) : (
				<>
					{panelOpen && (
						<div
							onClick={() => onPanelOpenChange(false)}
							className="fixed inset-0 z-40 bg-overlay/80"
						/>
					)}
					<aside
						className={cn(
							"fixed inset-y-0 z-50 flex w-72 border-r bg-card transition-[left] duration-500 ease-in-out",
							panelOpen ? "left-0" : "-left-72"
						)}>
						<AppSidebar className="border-r bg-card" />
						<MainLayoutPanel />
					</aside>
					<MainLayoutHeader />
					{children}
				</>
			)}
		</PageWrapper>
	);
};

export { MainLayoutProvider, useMainLayoutContext, MainLayout };
