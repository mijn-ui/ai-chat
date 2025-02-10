"use client";

import { SVGProps, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "@mijn-ui/react-button";
import { LuMoon, LuSun } from "react-icons/lu";

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ ...props }: ButtonProps) => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return;

	if (resolvedTheme === "dark") {
		return (
			<Button onClick={() => setTheme("light")} {...props}>
				<LuSun fontSize={16} />
			</Button>
		);
	}
	if (resolvedTheme === "light") {
		return (
			<Button onClick={() => setTheme("dark")} {...props}>
				<LuMoon fontSize={14} />
			</Button>
		);
	}
};

export default ThemeToggler;
