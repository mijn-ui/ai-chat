import React from "react";
import { ScrollArea } from "@mijn-ui/react-scroll-area";

const PageWrapper = ({
	children,
	scrollable = true
}: {
	children: React.ReactNode;
	scrollable?: boolean;
}) => {
	return (
		<>
			{scrollable ? (
				<ScrollArea className="relative h-[calc(100dvh-32px)] rounded-large border bg-card">
					{children}
				</ScrollArea>
			) : (
				<div className="relative h-[calc(100dvh-32px)] rounded-large border bg-card">
					{children}
				</div>
			)}
		</>
	);
};

export default PageWrapper;
