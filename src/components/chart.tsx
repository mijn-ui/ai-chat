import { ChartLegend, ChartTooltip } from "./ui/chart";
import {
	Area,
	AreaChart,
	Bar,
	CartesianGrid,
	Legend,
	BarChart as RechartBarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@mijn-ui/react-card";
import { BarChartConfig, ChartConfig, LineChartConfig } from "@/types";

const Chart = (props: ChartConfig) => {
	if (props.toolName === "bar-chart") {
		return <BarChart {...props} />;
	} else if (props.toolName === "line-chart") {
		return <LineChart {...props} />;
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

			<CardContent className="aspect-video w-full">
				<ResponsiveContainer width="100%" height="100%">
					<RechartBarChart accessibilityLayer data={content}>
						<CartesianGrid
							vertical={false}
							stroke="hsl(var(--mijnui-border))"
							strokeDasharray={3}
						/>

						<XAxis
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							dataKey={xAxisDataKey}
						/>

						<Tooltip
							cursor={{ fill: "hsl(var(--mijnui-accent))" }}
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

const LineChart = ({
	title,
	description,
	xAxisDataKey,
	content
}: LineChartConfig) => {
	const dataKeys = [...new Set(content.flatMap(Object.keys))];

	return (
		<Card className="mb-2 mt-4 w-full border bg-transparent text-xs shadow-none">
			<CardHeader>
				<CardTitle className="text-medium">{title}</CardTitle>
				<CardDescription className="text-small">{description}</CardDescription>
			</CardHeader>

			<CardContent className="aspect-video w-full">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={content}>
						<YAxis
							className="text-muted-foreground"
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>
						<XAxis
							className="text-muted-foreground"
							dataKey={xAxisDataKey}
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>

						<Tooltip
							cursor={{ stroke: "hsl(var(--mijnui-accent))", strokeWidth: 1 }}
							content={<ChartTooltip />}
						/>

						<CartesianGrid
							horizontal={false}
							stroke={"hsl(var(--mijnui-border))"}
							strokeDasharray={3}
						/>

						{dataKeys.map((key, index) => {
							if (key === xAxisDataKey) return null;

							return (
								<Area
									key={index}
									fill={`hsl(var(--chart-${index + 1}))`}
									stroke={`hsl(var(--chart-${index + 1}))`}
									fillOpacity={0.1}
									dataKey={key}
									activeDot={{
										color: `hsl(var(--chart-${index + 1}))`,
										r: 3,
										stroke: `hsl(var(--chart-${index + 1}))`
									}}
								/>
							);
						})}
					</AreaChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
