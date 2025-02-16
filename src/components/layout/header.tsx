import Logo from "./logo";
import ThemeToggler from "./theme-toggle/theme-toggle";
import { UserNav } from "./user-nav";

const Header = () => {
	return (
		<header className="flex w-full items-center justify-between gap-2 px-4 py-3">
			<Logo />

			<div className="flex items-center gap-2">
				<ThemeToggler
					size="sm"
					iconOnly
					variant="ghost"
					className="text-muted-foreground"
				/>

				<UserNav />
			</div>
		</header>
	);
};

export default Header;
