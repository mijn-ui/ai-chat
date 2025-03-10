import { ChartLegend, ChartTooltip } from "./ui/chart";
import {
	Area,
	AreaChart,
	Bar,
	CartesianGrid,
	LabelList,
	Legend,
	Pie,
	BarChart as RechartBarChart,
	PieChart as RechartPieChart,
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
import {
	BarChartConfig,
	ChartConfig,
	LineChartConfig,
	PieChartConfig
} from "@/types";

const Chart = (props: ChartConfig) => {
	switch (props.toolName) {
		case "bar-chart":
			return <BarChart {...props} />;
		case "line-chart":
			return <LineChart {...props} />;
		case "pie-chart":
			return <PieChart {...props} />;
		default:
			return null;
	}
};

export default Chart;

/* -------------------------------------------------------------------------- */

const getDataKeys = (content: Record<string, unknown>[], xAxisKey?: string) => {
	const keys = [...new Set(content.flatMap(Object.keys))];

	return xAxisKey ? keys.filter((key) => key !== xAxisKey) : keys;
};

const BarChart = ({
	title,
	description,
	xAxisDataKey,
	content
}: BarChartConfig) => {
	const dataKeys = getDataKeys(content, xAxisDataKey);

	return (
		<Card className="my-4 w-full border bg-transparent text-xs shadow-none">
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

						{dataKeys.map((key, index) => (
							<Bar
								key={key}
								// These colors should come from the api
								// and passed them accordingly
								fill={`hsl(var(--chart-${index + 1}))`}
								radius={[4, 4, 0, 0]}
								dataKey={key}
							/>
						))}

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
	const dataKeys = getDataKeys(content, xAxisDataKey);

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

						{dataKeys.map((key, index) => (
							<Area
								key={key}
								// These colors should come from the api
								// and passed them accordingly
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
						))}
					</AreaChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

const PieChart = ({ title, description, content }: PieChartConfig) => {
	const dataKeys = getDataKeys(content);

	return (
		<Card className="mb-2 mt-4 w-full border bg-transparent text-xs shadow-none">
			<CardHeader>
				<CardTitle className="text-medium">{title}</CardTitle>
				<CardDescription className="text-small">{description}</CardDescription>
			</CardHeader>

			<CardContent className="aspect-video w-full">
				<ResponsiveContainer width="100%" height="100%">
					<RechartPieChart>
						<Tooltip
							cursor={{ fill: "hsl(var(--mijnui-accent))" }}
							content={<ChartTooltip hideIndicator active />}
						/>
						{dataKeys.map((key) => (
							<Pie
								key={key}
								data={content}
								dataKey={key}
								stroke="fill-background">
								<LabelList
									dataKey={key}
									className="fill-card"
									stroke="none"
									fontSize={12}
								/>
							</Pie>
						))}
					</RechartPieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
