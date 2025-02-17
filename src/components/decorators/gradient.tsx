import React from "react";
import { cn } from "@mijn-ui/react-theme";

const Gradient = ({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) => {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute left-0 right-3 top-0 z-10 h-14",
				className
			)}
			{...props}>
			{" "}
			<div className="relative size-full">
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 1,
						backdropFilter: "blur(0.25px)",
						WebkitBackdropFilter: "blur(0.25px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 2,
						backdropFilter: "blur(0.5px)",
						WebkitBackdropFilter: "blur(0.5px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 3,
						backdropFilter: "blur(0.75px)",
						WebkitBackdropFilter: "blur(0.75px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 4,
						backdropFilter: "blur(1px)",
						WebkitBackdropFilter: "blur(1px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 5,
						backdropFilter: "blur(1.25px)",
						WebkitBackdropFilter: "blur(1.25px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 6,
						backdropFilter: "blur(1.5px)",
						WebkitBackdropFilter: "blur(1.5px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 7,
						backdropFilter: "blur(2px)",
						WebkitBackdropFilter: "blur(2px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 8,
						backdropFilter: "blur(2.5px)",
						WebkitBackdropFilter: "blur(2.5px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)"
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 size-full"
					style={{
						zIndex: 9,
						backdropFilter: "blur(3px)",
						WebkitBackdropFilter: "blur(3px)",
						maskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
						WebkitMaskImage:
							"linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)"
					}}
				/>
			</div>{" "}
		</div>
	);
};

export default Gradient;
