import React from "react";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { cn } from "@mijn-ui/react-theme";

type PageWrapperProps = {
	scrollable?: boolean;
	className?: string;
	children: React.ReactNode;
};

const PageWrapper = ({
	className,
	children,
	scrollable = true
}: PageWrapperProps) => {
	return (
		<>
			{scrollable ? (
				<ScrollArea
					className={cn("relative h-svh lg:h-[calc(100svh-32px)]", className)}>
					{children}
				</ScrollArea>
			) : (
				<div
					className={cn("relative h-svh lg:h-[calc(100svh-32px)]", className)}>
					{children}
				</div>
			)}
		</>
	);
};

export default PageWrapper;
