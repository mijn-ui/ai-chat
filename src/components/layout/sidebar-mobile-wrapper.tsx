"use client";

import { LuX } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogContentProps,
	DialogTitle
} from "@mijn-ui/react-dialog";
import { cn } from "@mijn-ui/react-theme";

type SidebarMobileWrapperProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: React.ReactNode;
} & DialogContentProps;

const SidebarMobileWrapper = ({
	open,
	onOpenChange,
	className,
	children,
	...props
}: SidebarMobileWrapperProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				unstyled
				className={cn(
					"fixed inset-y-0 left-0 z-50 flex w-72 border-r bg-card transition duration-500 ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
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

export default SidebarMobileWrapper;
