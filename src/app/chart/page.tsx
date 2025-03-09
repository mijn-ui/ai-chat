"use client";

import { LuTrendingUp } from "react-icons/lu";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@mijn-ui/react-card";
import { ChartLegend, ChartTooltip } from "@/components/ui/chart";

const Chart = () => {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300
		}
	];

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<Card className="w-full text-xs sm:min-w-[36rem] sm:max-w-2xl">
				<CardHeader>
					<CardTitle className="text-large">Bar Chart - Multiple</CardTitle>
					<CardDescription>January - June 2024</CardDescription>
				</CardHeader>
				<CardContent className="h-72 w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart accessibilityLayer data={barData}>
							<Legend
								verticalAlign="top"
								formatter={(value) => <ChartLegend value={value} />}
								iconType="circle"
								iconSize={8}
							/>

							<CartesianGrid
								vertical={false}
								stroke="hsl(var(--mijnui-border))"
							/>
							<XAxis
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								dataKey="name"
							/>
							<Tooltip
								cursor={false}
								content={<ChartTooltip indicator="square" active />}
							/>

							<Bar fill="hsl(var(--chart-1))" radius={4} dataKey="Primary" />
							<Bar fill="hsl(var(--chart-2))" radius={4} dataKey="Secondary" />
							<Bar fill="hsl(var(--chart-3))" radius={4} dataKey="Accent" />
							<Bar fill="hsl(var(--chart-4))" radius={4} dataKey="Gray" />
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="flex gap-2 font-medium leading-none">
						Trending up by 5.2% this month <LuTrendingUp className="size-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Showing total visitors for the last 6 months
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Chart;

export const data = [
	{
		name: "Jan",
		Primary: 3000,
		Secondary: 4000,
		Accent: 5000,
		Gray: 6000,
		Neutral: 7000
	},
	{
		name: "Feb",
		Primary: 3000,
		Secondary: 4000,
		Accent: 5000,
		Gray: 6000,
		Neutral: 7000
	},
	{
		name: "Mar",
		Primary: 2000,
		Secondary: 3000,
		Accent: 4000,
		Gray: 5000,
		Neutral: 6000
	},
	{
		name: "Apr",
		Primary: 2780,
		Secondary: 3780,
		Accent: 4780,
		Gray: 5780,
		Neutral: 6780
	},
	{
		name: "May",
		Primary: 1890,
		Secondary: 2890,
		Accent: 3890,
		Gray: 4890,
		Neutral: 5890
	},
	{
		name: "Jun",
		Primary: 2390,
		Secondary: 3390,
		Accent: 4390,
		Gray: 5390,
		Neutral: 6390
	},
	{
		name: "Jul",
		Primary: 3490,
		Secondary: 4490,
		Accent: 5490,
		Gray: 6490,
		Neutral: 7490
	},
	{
		name: "Aug",
		Primary: 3490,
		Secondary: 4490,
		Accent: 5490,
		Gray: 6490,
		Neutral: 7490
	},
	{
		name: "Sep",
		Primary: 5490,
		Secondary: 6490,
		Accent: 7490,
		Gray: 8490,
		Neutral: 9490
	},
	{
		name: "Oct",
		Primary: 3490,
		Secondary: 4490,
		Accent: 5490,
		Gray: 6490,
		Neutral: 7490
	},
	{
		name: "Nov",
		Primary: 3000,
		Secondary: 4000,
		Accent: 5000,
		Gray: 6000,
		Neutral: 7000
	},
	{
		name: "Dec",
		Primary: 3490,
		Secondary: 4490,
		Accent: 5490,
		Gray: 6490,
		Neutral: 7470
	}
];

export const barData = [
	{
		name: "Jan",
		Primary: 1000,
		Secondary: 1100,
		Accent: 1200,
		Gray: 1300,
		Neutral: 1400
	},
	{
		name: "Feb",
		Primary: 1100,
		Secondary: 1200,
		Accent: 1300,
		Gray: 1400,
		Neutral: 1500
	},
	{
		name: "Mar",
		Primary: 1200,
		Secondary: 1300,
		Accent: 1400,
		Gray: 1500,
		Neutral: 1600
	},
	{
		name: "Apr",
		Primary: 1300,
		Secondary: 1400,
		Accent: 1500,
		Gray: 1600,
		Neutral: 1700
	},
	{
		name: "May",
		Primary: 1400,
		Secondary: 1500,
		Accent: 1600,
		Gray: 1700,
		Neutral: 1800
	},
	{
		name: "Jun",
		Primary: 1300,
		Secondary: 1400,
		Accent: 1500,
		Gray: 1600,
		Neutral: 2000
	},
	{
		name: "Jul",
		Primary: 1500,
		Secondary: 1600,
		Accent: 1700,
		Gray: 1800,
		Neutral: 1900
	},
	{
		name: "Aug",
		Primary: 1400,
		Secondary: 1500,
		Accent: 1600,
		Gray: 1700,
		Neutral: 2000
	},
	{
		name: "Sep",
		Primary: 1400,
		Secondary: 1500,
		Accent: 1600,
		Gray: 1700,
		Neutral: 2000
	},
	{
		name: "Oct",
		Primary: 1200,
		Secondary: 1300,
		Accent: 1400,
		Gray: 1500,
		Neutral: 2000
	},
	{
		name: "Nov",
		Primary: 1800,
		Secondary: 1900,
		Accent: 2000,
		Gray: 2100,
		Neutral: 2300
	},
	{
		name: "Dec",
		Primary: 1800,
		Secondary: 1950,
		Accent: 2000,
		Gray: 2200,
		Neutral: 2500
	}
];

export const categoryBarData = [
	{
		name: "consumption",
		Primary: 6000,
		Secondary: 1000,
		Accent: 1000,
		Gray: 1000,
		Neutral: 2000
	}
];

export const radarData = [
	{
		subject: "Math",
		A: 120,
		B: 110,
		fullMark: 150
	},
	{
		subject: "Chinese",
		A: 98,
		B: 130,
		fullMark: 150
	},
	{
		subject: "English",
		A: 86,
		B: 130,
		fullMark: 150
	},
	{
		subject: "Geography",
		A: 99,
		B: 100,
		fullMark: 150
	},
	{
		subject: "Physics",
		A: 85,
		B: 90,
		fullMark: 150
	},
	{
		subject: "History",
		A: 65,
		B: 85,
		fullMark: 150
	}
];
