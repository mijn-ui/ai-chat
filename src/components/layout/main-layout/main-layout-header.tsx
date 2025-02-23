import ThemeToggler from "../theme-toggle/theme-toggle";
import { UserNav } from "../user-nav";
import { useMainLayoutContext } from "./main-layout";
import { LuPanelLeft } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import { cn } from "@mijn-ui/react-theme";

const MainLayoutHeader = ({ className }: { className?: string }) => {
	const { panelOpen, onPanelOpenChange } = useMainLayoutContext();

	return (
		<div
			className={cn(
				"sticky top-0 flex w-full items-center justify-between gap-2 px-4 py-3 text-muted-foreground",
				className
			)}>
			<Button
				size="sm"
				iconOnly
				variant="ghost"
				onClick={() => onPanelOpenChange(!panelOpen)}>
				<LuPanelLeft />
				<span className="sr-only">Toggle Panel</span>
			</Button>
			<div className="flex items-center gap-2">
				<ThemeToggler variant="ghost" />
				<UserNav />
			</div>
		</div>
	);
};

export { MainLayoutHeader };
