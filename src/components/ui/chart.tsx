import React from "react";
import { Tooltip } from "recharts";
import { VariantProps, cn, tv } from "@mijn-ui/react-theme";

/* -------------------------------------------------------------------------- */
/*                                ChartToolTip                                */
/* -------------------------------------------------------------------------- */

export const tooltipStyles = tv({
	slots: {
		base: "flex aspect-video flex-col justify-center rounded-medium border bg-card text-xs shadow-large",
		label: "block font-medium",
		separator: "my-1.5 h-divider bg-border",
		content: "space-y-1",
		entry: "flex items-center justify-between gap-8",
		entryValue: "",
		entryNameContainer: "flex items-center gap-3",
		entryName: "text-muted-foreground",
		entryIndicator: ""
	},
	variants: {
		singleEntry: {
			true: { base: "aspect-auto p-2" },
			false: { base: "p-2.5" }
		},
		indicator: {
			ring: {
				entryIndicator:
					"size-1.5 rounded-full ring ring-[var(--entry-indicator-color)]"
			},
			circle: {
				entryIndicator:
					"size-2.5 rounded-full bg-[var(--entry-indicator-color)]"
			},
			square: {
				entryIndicator:
					"size-2.5 rounded-small bg-[var(--entry-indicator-color)]"
			},
			line: {
				entryIndicator: "h-3 w-1 bg-[var(--entry-indicator-color)]"
			}
		}
	},
	defaultVariants: {
		indicator: "circle",
		singleEntry: false
	}
});

export type TooltipSlots = keyof ReturnType<typeof tooltipStyles>;
export type TooltipVariantProps = VariantProps<typeof tooltipStyles>;

/* -------------------------------------------------------------------------- */
type TooltipProps = React.ComponentProps<typeof Tooltip> &
	React.ComponentProps<"div"> & {
		hideLabel?: boolean;
		hideIndicator?: boolean;
		indicator?: TooltipVariantProps["indicator"];
	};

const ChartTooltip = ({
	active,
	className,
	payload,
	indicator = "circle",
	hideIndicator = false,
	hideLabel = false,
	labelFormatter,
	formatter,
	color,
	label,
	labelClassName
}: TooltipProps) => {
	const singleEntry = payload?.length === 1;

	const {
		base,
		separator,
		label: labelClasses,
		content,
		entryName,
		entry: entryClasses,
		entryIndicator,
		entryNameContainer,
		entryValue
	} = tooltipStyles({ singleEntry });

	const LabelComponent = () => {
		if (hideLabel || !payload?.length || singleEntry) {
			return null;
		}

		return (
			<span className={labelClasses({ className: labelClassName })}>
				{labelFormatter ? labelFormatter(label, payload) : label}
			</span>
		);
	};

	if (!active || !payload?.length) {
		return null;
	}

	return (
		<div
			role="tooltip"
			className={base({
				singleEntry,
				className: cn("relative z-50", className)
			})}>
			<LabelComponent />
			{!singleEntry && !hideLabel && (
				<div role="separator" className={separator()} />
			)}

			<div className={content()}>
				{payload.map((entry, index) =>
					formatter && entry?.value !== undefined && entry.name ? (
						formatter(entry.value, entry.name, entry, index, entry.payload)
					) : (
						<div
							key={entry.name || entry.dataKey || "value"}
							className={entryClasses()}>
							<div className={entryNameContainer()}>
								{!hideIndicator && (
									<div
										aria-hidden
										className={entryIndicator({ indicator })}
										style={
											{
												"--entry-indicator-color": color || entry.color
											} as React.CSSProperties
										}
									/>
								)}
								<span className={entryName()}>{entry.name}</span>
							</div>
							{entry.value && (
								<span className={entryValue()}>{entry.value}</span>
							)}
						</div>
					)
				)}
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                 ChartLegend                                */
/* -------------------------------------------------------------------------- */

const ChartLegend = ({
	value,
	className
}: React.ComponentPropsWithRef<"span"> & { value: string }) => {
	return (
		<span
			className={cn(
				"ml-1 mr-3 text-sm font-medium text-muted-foreground",
				className
			)}>
			{value}
		</span>
	);
};

export { ChartTooltip, ChartLegend };
