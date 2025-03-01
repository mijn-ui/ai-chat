"use client";

import { useScreenSizes } from "@/hooks/use-screen-sizes";

/**
 * Available screen size options for conditional rendering.
 */
type ScreenSize =
	| "all" // Renders everywhere
	| "mobile" // Mobile only
	| "tablet" // Tablet only
	| "desktop" // Desktop only
	| "below-desktop" // Mobile + Tablet
	| "above-mobile"; // Tablet + Desktop

type RenderOnScreenProps = {
	screen: ScreenSize;
	children: React.ReactNode;
};

/**
 * Component to conditionally render children based on the screen size.
 *
 * @param screen - The screen size option for conditional rendering.
 * @param children - The content to be conditionally rendered.
 * @returns The children if the screen size condition is met, otherwise null.
 *
 * @example
 * <RenderOnScreen screen="mobile">
 *   <p>This content is only visible on mobile devices.</p>
 * </RenderOnScreen>
 */
const RenderOnScreen = ({ screen, children }: RenderOnScreenProps) => {
	const { isMobile, isTablet, isDesktop } = useScreenSizes();

	const shouldRender =
		screen === "all" ||
		(screen === "mobile" && isMobile) ||
		(screen === "tablet" && isTablet) ||
		(screen === "desktop" && isDesktop) ||
		(screen === "below-desktop" && (isMobile || isTablet)) ||
		(screen === "above-mobile" && (isTablet || isDesktop));

	return shouldRender ? <>{children}</> : null;
};

export default RenderOnScreen;
