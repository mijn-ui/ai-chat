"use client";

import React from "react";
import { cn } from "@mijn-ui/react-theme";
import { useActivePathSegment } from "@/hooks/use-active-path-segment";

type AppTitleProps = {
	title?: string;
} & React.ComponentProps<"h5">;

const AppTitle = ({ title: titleProp, className, ...props }: AppTitleProps) => {
	const title = titleProp || useActivePathSegment(0);

	return (
		<h5
			className={cn(
				"truncate text-small font-semibold capitalize text-foreground",
				className
			)}
			{...props}>
			{title}
		</h5>
	);
};

export default AppTitle;
