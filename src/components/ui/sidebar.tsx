"use client";

import React, { ComponentPropsWithRef } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "./tooltip";
import { LuX } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import { createTVUnstyledSlots } from "@mijn-ui/react-core";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogContentProps,
	DialogTitle
} from "@mijn-ui/react-dialog";
import { useControlledState, useTVUnstyled } from "@mijn-ui/react-hooks";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import {
	UnstyledComponentWithSlots,
	UnstyledProps,
	VariantProps,
	cn,
	tv
} from "@mijn-ui/react-theme";
import { createContext } from "@mijn-ui/react-utilities";
import { Slot } from "@radix-ui/react-slot";

/* -------------------------------------------------------------------------- */

const SIDEBAR_WIDTH = 248;
const SIDEBAR_ICON_WIDTH = 48;

/* -------------------------------------------------------------------------- */
/*                                SidebarStyles                               */
/* -------------------------------------------------------------------------- */

const sidebarStyles = tv({
	variants: {
		collapsible: {
			true: "",
			false: ""
		},
		state: {
			open: "",
			closed: ""
		},
		active: {
			true: {
				sidebarMenuButton:
					"bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90"
			},
			false: {
				sidebarMenuButton:
					"text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
			}
		}
	},
	slots: {
		provider: "",
		sidebar:
			"relative flex h-svh w-[var(--mijnui-sidebar-icon-width)] flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-300",
		sidebarInset: "size-full",
		sidebarTrigger: "",
		sidebarHeader: "sticky top-0 flex shrink-0 items-center gap-2",
		sidebarContent: "",
		sidebarFooter: "sticky bottom-0 flex shrink-0 flex-col gap-2 py-4",
		sidebarGroup: "w-full py-2",
		sidebarMenu: "flex flex-col gap-1 px-2",
		sidebarMenuItem: "relative",
		sidebarMenuButton:
			"inline-flex size-8 h-7 items-center gap-2 rounded-medium p-2.5 text-left text-small outline-none transition-[width,height,padding] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-ring [&>span]:hidden [&>span]:truncate [&>svg]:shrink-0"
	},
	compoundVariants: [
		{
			collapsible: true,
			state: "open",
			class: {
				sidebar: "w-[var(--mijnui-sidebar-width)]",
				sidebarMenuButton: "w-full px-3"
			}
		}
	]
});

export type SidebarSlots = keyof ReturnType<typeof sidebarStyles>;
export type SidebarVariantProps = VariantProps<typeof sidebarStyles>;

/* -------------------------------------------------------------------------- */
/*                               SidebarContext                               */
/* -------------------------------------------------------------------------- */

type SidebarBaseProps = UnstyledComponentWithSlots<SidebarSlots>;

type SidebarContextType = SidebarBaseProps & {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	defaultOpen?: boolean;
	styles: ReturnType<typeof sidebarStyles>;
};

const [SidebarContextProvider, useSidebarContext] =
	createContext<SidebarContextType>({
		name: "SidebarContext",
		strict: true,
		errorMessage:
			"useSidebarContext: `context` is undefined. Ensure the component is wrapped within <SidebarProvider />"
	});

/* -------------------------------------------------------------------------- */
/*                                 SidebarHook                                */
/* -------------------------------------------------------------------------- */

const useSidebarStyles = (unstyledOverride?: boolean) => {
	const context = useSidebarContext();
	const unstyledSlots = useTVUnstyled(context, unstyledOverride);

	return { ...unstyledSlots, classNames: context.classNames };
};

/* -------------------------------------------------------------------------- */
/*                               SidebarProvider                              */
/* -------------------------------------------------------------------------- */

export type SidebarProviderProps = SidebarBaseProps &
	SidebarVariantProps & {
		collapsible?: boolean;
		open?: boolean;
		defaultOpen?: boolean;
		onOpenChange?: (state: boolean) => void;
		children: React.ReactNode;
	} & ComponentPropsWithRef<"div">;

const SidebarProvider = ({
	unstyled,
	className,
	classNames,
	collapsible = true,
	defaultOpen = false,
	open: controlledOpen,
	onOpenChange: controlledOnOpenChange,
	...props
}: SidebarProviderProps) => {
	const [open, onOpenChange] = useControlledState<boolean>(
		controlledOpen,
		defaultOpen,
		controlledOnOpenChange
	);

	const styles = sidebarStyles({
		state: open ? "open" : "closed",
		collapsible
	});
	const { provider } = createTVUnstyledSlots(
		{ provider: styles.provider },
		unstyled
	);

	const contextValue: SidebarContextType = {
		open,
		onOpenChange,
		defaultOpen,
		unstyled,
		classNames,
		styles
	};

	return (
		<SidebarContextProvider value={contextValue}>
			<TooltipProvider delayDuration={0}>
				<div
					className={provider({
						className: cn(classNames?.provider, className)
					})}
					style={
						{
							"--mijnui-sidebar-width": `${SIDEBAR_WIDTH}px`,
							"--mijnui-sidebar-icon-width": `${SIDEBAR_ICON_WIDTH}px`
						} as React.CSSProperties
					}
					data-state={open ? "open" : "closed"}
					{...props}
				/>
			</TooltipProvider>
		</SidebarContextProvider>
	);
};

/* -------------------------------------------------------------------------- */
/*                                   Sidebar                                  */
/* -------------------------------------------------------------------------- */

export type SidebarProps = ComponentPropsWithRef<"div"> & UnstyledProps;

const Sidebar = ({ unstyled, className, ...props }: SidebarProps) => {
	const { sidebar, classNames } = useSidebarStyles(unstyled);
	const { open } = useSidebarContext();

	return (
		<div
			className={sidebar({ className: cn(classNames?.sidebar, className) })}
			data-state={open ? "open" : "closed"}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                                SidebarMobile                               */
/* -------------------------------------------------------------------------- */

export type SidebarDialogProps = DialogContentProps;

const SidebarDialog = ({
	className,
	children,
	...props
}: SidebarDialogProps) => {
	const { open, onOpenChange } = useSidebarContext();

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				unstyled
				className={cn(
					"fixed inset-y-0 left-0 z-50 flex w-72 border-r bg-card transition duration-500 ease-in-out lg:data-[state=closed]:duration-300 lg:data-[state=open]:duration-500 lg:data-[state=open]:animate-in lg:data-[state=closed]:animate-out lg:data-[state=closed]:slide-out-to-left lg:data-[state=open]:slide-in-from-left",
					className
				)}
				{...props}>
				{children}
				<DialogTitle className="sr-only">Sidebar</DialogTitle>
				<DialogClose unstyled asChild>
					<Button
						iconOnly
						size="sm"
						radius="full"
						variant="ghost"
						className="absolute right-2 top-1">
						<LuX size={16} />
					</Button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
};

/* -------------------------------------------------------------------------- */
/*                                SidebarInset                                */
/* -------------------------------------------------------------------------- */

export type SidebarInsetProps = React.ComponentPropsWithRef<"div"> &
	UnstyledProps;

const SidebarInset = ({ unstyled, className, ...props }: SidebarInsetProps) => {
	const { classNames, sidebarInset } = useSidebarStyles(unstyled);

	return (
		<div
			className={sidebarInset({
				className: cn(classNames?.sidebarInset, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                               SidebarTrigger                               */
/* -------------------------------------------------------------------------- */
export type SidebarTriggerProps = React.ComponentProps<typeof Button>;

const SidebarTrigger = ({
	unstyled,
	className,
	onClick,
	...props
}: SidebarTriggerProps) => {
	const { classNames, sidebarTrigger } = useSidebarStyles(unstyled);
	const { open, onOpenChange } = useSidebarContext();

	return (
		<Button
			unstyled={unstyled}
			className={sidebarTrigger({
				className: cn(classNames?.sidebarTrigger, className)
			})}
			data-state={open ? "open" : "closed"}
			onClick={(e) => {
				onOpenChange(!open);
				onClick?.(e);
			}}
			variant="outlined"
			iconOnly
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                                SidebarHeader                               */
/* -------------------------------------------------------------------------- */

export type SidebarHeaderProps = React.ComponentPropsWithRef<"div"> &
	UnstyledProps;

const SidebarHeader = ({
	unstyled,
	className,
	...props
}: SidebarHeaderProps) => {
	const { classNames, sidebarHeader } = useSidebarStyles(unstyled);

	return (
		<div
			className={sidebarHeader({
				className: cn(classNames?.sidebarHeader, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                               SidebarContent                               */
/* -------------------------------------------------------------------------- */

export type SidebarContentProps = React.ComponentPropsWithRef<
	typeof ScrollArea
> &
	UnstyledProps;

const SidebarContent = ({
	unstyled,
	className,
	...props
}: SidebarContentProps) => {
	const { classNames, sidebarContent } = useSidebarStyles(unstyled);

	return (
		<ScrollArea
			className={sidebarContent({
				className: cn(classNames?.sidebarContent, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                                SidebarFooter                               */
/* -------------------------------------------------------------------------- */

export type SidebarFooterProps = React.ComponentPropsWithRef<"div"> &
	UnstyledProps;

const SidebarFooter = ({
	unstyled,
	className,
	...props
}: SidebarFooterProps) => {
	const { classNames, sidebarFooter } = useSidebarStyles(unstyled);

	return (
		<div
			className={sidebarFooter({
				className: cn(classNames?.sidebarFooter, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                                SidebarGroup                                */
/* -------------------------------------------------------------------------- */

export type SidebarGroupProps = React.ComponentPropsWithRef<"div"> &
	UnstyledProps;

const SidebarGroup = ({ unstyled, className, ...props }: SidebarGroupProps) => {
	const { classNames, sidebarGroup } = useSidebarStyles(unstyled);

	return (
		<div
			className={sidebarGroup({
				className: cn(classNames?.sidebarGroup, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                                 SidebarMenu                                */
/* -------------------------------------------------------------------------- */

export type SidebarMenuProps = React.ComponentPropsWithRef<"ul"> &
	UnstyledProps;

const SidebarMenu = ({ unstyled, className, ...props }: SidebarMenuProps) => {
	const { classNames, sidebarMenu } = useSidebarStyles(unstyled);

	return (
		<ul
			className={sidebarMenu({
				className: cn(classNames?.sidebarMenu, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                               SidebarMenuItem                              */
/* -------------------------------------------------------------------------- */

export type SidebarMenuItemProps = React.ComponentPropsWithRef<"li"> &
	UnstyledProps;

const SidebarMenuItem = ({
	unstyled,
	className,
	...props
}: SidebarMenuItemProps) => {
	const { classNames, sidebarMenuItem } = useSidebarStyles(unstyled);

	return (
		<li
			className={sidebarMenuItem({
				className: cn(classNames?.sidebarMenuItem, className)
			})}
			{...props}
		/>
	);
};

/* -------------------------------------------------------------------------- */
/*                              SidebarMenuButton                             */
/* -------------------------------------------------------------------------- */

export type SidebarMenuButtonProps = React.ComponentPropsWithRef<"button"> &
	UnstyledProps & {
		asChild?: boolean;
		active?: boolean;
		tooltip?: string | React.ComponentProps<typeof TooltipContent>;
		openOnClick?: boolean;
	};

const SidebarMenuButton = ({
	asChild,
	unstyled,
	className,
	openOnClick = false,
	active,
	tooltip,
	onClick,
	...props
}: SidebarMenuButtonProps) => {
	const Component = asChild ? Slot : "button";
	const { open, onOpenChange } = useSidebarContext();
	const { classNames, sidebarMenuButton } = useSidebarStyles(unstyled);

	const renderButton = (
		<Component
			onClick={(e) => {
				openOnClick && onOpenChange(true);
				onClick?.(e);
			}}
			data-state={active ? "open" : "closed"}
			className={sidebarMenuButton({
				active,
				className: cn(classNames?.sidebarMenuButton, className)
			})}
			{...props}
		/>
	);

	if (!tooltip) return renderButton;

	if (typeof tooltip === "string") {
		tooltip = {
			children: tooltip
		};
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>{renderButton}</TooltipTrigger>
			<TooltipContent side="right" align="center" hidden={open} {...tooltip} />
		</Tooltip>
	);
};

export {
	SidebarProvider,
	Sidebar,
	SidebarDialog,
	SidebarInset,
	SidebarTrigger,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	useSidebarContext
};
