import React from "react";
import ThemeToggler from "./theme-toggle/theme-toggle";
import { UserNav } from "./user-nav";
import { cn } from "@mijn-ui/react-theme";

type HeaderProps = Omit<React.ComponentProps<"div">, "children">;

const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<div
			className={cn(
				"sticky top-0 flex w-full items-center justify-between gap-2 px-4 py-3 text-muted-foreground",
				className
			)}
			{...props}>
			<div>
				<h3 className="text-medium font-semibold text-foreground">Upload</h3>
			</div>
			<div className="flex items-center gap-2">
				<ThemeToggler variant="ghost" />
				<UserNav />
			</div>
		</div>
	);
};

export default Header;
