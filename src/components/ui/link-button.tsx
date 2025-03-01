"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, ButtonProps } from "@mijn-ui/react-button";

type LinkButtonProps = {
	activeVariant?: ButtonProps["variant"];
	activeColor?: ButtonProps["color"];
	href: string;
} & ButtonProps;

const LinkButton = ({
	children,
	color = "default",
	variant = "ghost",
	activeColor = "primary",
	activeVariant = "subtle",
	href,
	...props
}: LinkButtonProps) => {
	const pathname = usePathname();

	return (
		<Button
			asChild
			color={pathname === href ? activeColor : color}
			variant={pathname === href ? activeVariant : variant}
			size="xs"
			{...props}>
			<Link href={href}>{children}</Link>
		</Button>
	);
};

export default LinkButton;
