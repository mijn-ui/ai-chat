import { useEffect } from "react";

export const useEscapeKeyListener = (
	callback: () => void,
	isActive: boolean
) => {
	useEffect(() => {
		if (!isActive) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				callback();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [callback, isActive]);
};
