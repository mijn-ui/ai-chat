import { ChartLegend, ChartTooltip } from "./ui/chart";
import {
	Bar,
	CartesianGrid,
	Legend,
	BarChart as RechartBarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@mijn-ui/react-card";
import { BarChartConfig, ChartConfig } from "@/types";

const Chart = (props: ChartConfig) => {
	if (props.toolName === "bar-chart") {
		return <BarChart {...props} />;
	}

	return <div>Helo</div>;
};

export default Chart;

const BarChart = ({
	title,
	description,
	xAxisDataKey,
	content
}: BarChartConfig) => {
	const dataKeys = [...new Set(content.flatMap(Object.keys))];

	return (
		<Card className="mb-2 mt-4 w-full border bg-transparent text-xs shadow-none">
			<CardHeader>
				<CardTitle className="text-medium">{title}</CardTitle>
				<CardDescription className="text-small">{description}</CardDescription>
			</CardHeader>

			<CardContent className="h-64 w-full sm:h-72">
				<ResponsiveContainer width="100%" height="100%">
					<RechartBarChart accessibilityLayer data={content}>
						<CartesianGrid
							vertical={false}
							stroke="hsl(var(--mijnui-border))"
						/>

						<XAxis
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							dataKey={xAxisDataKey}
						/>

						<Tooltip
							cursor={false}
							content={<ChartTooltip indicator="square" active />}
						/>

						{dataKeys.map((key, index) => {
							if (key === xAxisDataKey) return null;

							return (
								<Bar
									key={index}
									fill={`hsl(var(--chart-${index + 1}))`}
									radius={[4, 4, 0, 0]}
									dataKey={key}
								/>
							);
						})}

						<Legend
							verticalAlign="top"
							formatter={(value) => <ChartLegend value={value} />}
							iconType="circle"
							iconSize={8}
						/>
					</RechartBarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
