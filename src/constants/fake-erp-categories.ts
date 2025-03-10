import {
	compareDesc,
	format,
	isThisMonth,
	isThisWeek,
	isToday,
	isYesterday,
	parseISO,
	subDays
} from "date-fns";
import { faker } from "@faker-js/faker";
import { ERPCategory, ERPChat } from "@/types";

export const fakeERPCategories: ERPCategory[] = sortByDate([
	{
		id: "1f0e3822-d06d-488b-8c10-193134a18144",
		title: "Balance Sheet Overview",
		icon: "spread-sheet",
		url: "balance-sheet-overview",
		created_at: new Date().toISOString(),
		chats: [
			{
				id: "76ab68a3-34e1-499e-8147-bb266739c6e8",
				title: "Assets and Liabilities Breakdown",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-76ab68a3-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"How do cash reserves and accounts receivable fluctuate throughout the fiscal year?"
							}
						]
					},
					{
						id: "msg-76ab68a3-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Asset Value Trends Over the Year\n\nCash and accounts receivable fluctuate throughout the fiscal year due to various factors such as market demand, payment cycles, and economic conditions.\n\n- **Seasonal changes** can significantly impact cash flow and accounts receivable amounts\n- **Business cycles** affect payment collection and liquid asset availability\n- **Operational factors** like sales volume and payment terms influence both metrics\n\nBelow is a **chart representation** of cash and accounts receivable trends across all months."
							},
							{
								type: "tool-invocation",
								toolName: "bar-chart",
								title: "Cash & Receivables Trends",
								description:
									"Monthly breakdown of cash and accounts receivable",
								xAxisDataKey: "name",
								content: [
									{
										name: "Jan",
										cash: 1000,
										receivables: 1100
									},
									{
										name: "Feb",
										cash: 1100,
										receivables: 1200
									},
									{
										name: "Mar",
										cash: 1200,
										receivables: 1300
									},
									{
										name: "Apr",
										cash: 1300,
										receivables: 1400
									},
									{
										name: "May",
										cash: 1400,
										receivables: 1500
									},
									{
										name: "Jun",
										cash: 1300,
										receivables: 1400
									},
									{
										name: "Jul",
										cash: 1500,
										receivables: 1600
									},
									{
										name: "Aug",
										cash: 1400,
										receivables: 1500
									},
									{
										name: "Sep",
										cash: 1400,
										receivables: 1500
									},
									{
										name: "Oct",
										cash: 1200,
										receivables: 1300
									},
									{
										name: "Nov",
										cash: 1800,
										receivables: 1900
									},
									{
										name: "Dec",
										cash: 1800,
										receivables: 1950
									}
								]
							},
							{
								type: "text",
								content:
									"#### Summary of Asset Trends\n\nFrom the **chart data**, we can observe several key patterns:\n\n- **Cash reserves** follow a variable pattern with:\n  - Steady growth from January to May\n  - A slight decrease in June\n  - Peak levels in November and December (50% higher than January)\n  - A notable dip in October\n\n- **Accounts receivable** demonstrate a consistent upward trend:\n  - Starting at $1,100 in January\n  - Ending at $1,950 in December (77% increase)\n  - Generally maintaining about $100-150 above cash values\n\n- **Correlation** between cash and receivables indicates effective collection practices, with both metrics peaking in the final quarter\n\nUnderstanding these patterns provides critical insights for **cash flow management** and **collection strategy optimization**."
							}
						]
					}
				]
			},
			{
				id: "dev-12345",
				title: "Code Implementation",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-dev-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"How can I fetch balance sheet data using an API in TypeScript?"
							}
						]
					},
					{
						id: "msg-dev-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Fetching Balance Sheet Data with TypeScript\n\n" +
									"You can use **fetch** or **Axios** to retrieve balance sheet data from an API. Here’s an example using TypeScript and Axios:\n\n" +
									"```ts\n" +
									"import axios from 'axios';\n\n" +
									"interface BalanceSheet {\n" +
									"  assets: number;\n" +
									"  liabilities: number;\n" +
									"  equity: number;\n" +
									"}\n\n" +
									"async function fetchBalanceSheet(): Promise<BalanceSheet> {\n" +
									"  const response = await axios.get<BalanceSheet>('https://api.example.com/balance-sheet');\n" +
									"  return response.data;\n" +
									"}\n\n" +
									"fetchBalanceSheet().then(data => console.log(data)).catch(error => console.error(error));\n" +
									"```\n\n" +
									"This fetches the balance sheet data and logs it to the console. Ensure you replace the URL with your actual API endpoint.\n\n" +
									"*Sources: MDN Web Docs, Axios Documentation*"
							}
						]
					}
				]
			},
			{
				id: "dev-56789",
				title: "Asset & Liability Trend Visualization",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-dev-3",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Can you show me how our assets and liabilities have been trending over the past 6 months?"
							}
						]
					},
					{
						id: "msg-dev-4",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Your Assets and Liabilities Trend Analysis\n\nI've analyzed your company's financial data from the ERP system for the first half of this year. Here's what I found:\n\n- Your **total assets** have increased from $120,000 in January to $170,000 in June, representing a 42% growth\n- Your **total liabilities** have grown at a slower rate, from $65,000 to $82,000 (a 26% increase)\n- The **net asset position** has improved from $55,000 to $88,000, a 60% improvement\n\nThis indicates strengthening financial health over the period. Let me show you a visual representation of these trends:"
							},
							{
								type: "tool-invocation",
								toolName: "line-chart",
								title: "Your Assets vs Liabilities Trend",
								description: "6-month comparison from your ERP data",
								xAxisDataKey: "month",
								content: [
									{ month: "Jan", assets: 120000, liabilities: 65000 },
									{ month: "Feb", assets: 132000, liabilities: 70000 },
									{ month: "Mar", assets: 145000, liabilities: 72000 },
									{ month: "Apr", assets: 140000, liabilities: 75000 },
									{ month: "May", assets: 152000, liabilities: 80000 },
									{ month: "Jun", assets: 170000, liabilities: 82000 }
								]
							},
							{
								type: "text",
								content:
									"### Key Insights for Your Business\n\n- **Strong Overall Growth**: Your asset base is growing significantly faster than your liabilities, which strengthens your overall financial position\n- **April Dip**: There was a temporary reduction in assets in April, which might be related to your seasonal business cycle or a major asset purchase/sale\n- **Increasing Leverage Efficiency**: Your company is generating more assets per dollar of liability, improving your return on borrowed capital\n- **Future Projection**: If this trend continues, you're on track to have double your January asset position by year-end\n\nWould you like me to analyze any specific aspect of this trend in more detail, such as the breakdown of current vs. non-current assets or the composition of your liability growth?"
							}
						]
					}
				]
			}
		]
	},
	{
		id: "2b1585cc-66b1-407d-bc0e-967a44f9d845",
		title: "Income Statement Analysis",
		icon: "trending-up",
		url: "income-statement-analysis",
		created_at: subDays(new Date(), 1).toISOString(),
		chats: [
			{
				id: "baa1b611-f02e-4d89-9860-bb9ca2393598",
				title: "Revenue vs. Expenses Overview",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-income-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Could you show me our revenue versus expenses for each quarter this year?"
							}
						]
					},
					{
						id: "msg-income-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Revenue vs. Expenses Quarterly Analysis\n\nI've analyzed your quarterly financial data from the ERP system. Here's what the numbers show:\n\n- **Q1**: Revenue of $425,000 against expenses of $342,000, yielding a profit margin of 19.5%\n- **Q2**: Revenue increased to $488,000 while expenses grew to $376,000, improving the profit margin to 22.9%\n- **Q3**: Both metrics saw modest growth with $512,000 in revenue versus $390,000 in expenses (23.8% margin)\n- **Q4**: Strongest performance with $575,000 in revenue against $412,000 in expenses (28.3% margin)\n\nLet me visualize this comparison for you:"
							},
							{
								type: "tool-invocation",
								toolName: "bar-chart",
								title: "Quarterly Revenue vs. Expenses",
								description: "Financial performance by quarter",
								xAxisDataKey: "quarter",
								content: [
									{ quarter: "Q1", revenue: 425000, expenses: 342000 },
									{ quarter: "Q2", revenue: 488000, expenses: 376000 },
									{ quarter: "Q3", revenue: 512000, expenses: 390000 },
									{ quarter: "Q4", revenue: 575000, expenses: 412000 }
								]
							},
							{
								type: "text",
								content:
									"### Key Insights\n\n- **Consistent Growth**: Both revenue and expenses increased each quarter, but revenue grew at a faster rate\n- **Widening Profit Gap**: The difference between revenue and expenses expanded from $83,000 in Q1 to $163,000 in Q4\n- **Increasing Efficiency**: Your expense-to-revenue ratio improved from 80.5% in Q1 to 71.7% in Q4\n- **Seasonal Impact**: Q4 showed the strongest performance, likely reflecting holiday season sales boost\n\nWould you like to see a breakdown of expenses by category to identify which costs are growing most rapidly?"
							}
						]
					}
				]
			},
			{
				id: "481bbe59-807c-472b-a74d-09dbadc2da75",
				title: "Gross Profit Margin Trends",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-margin-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"How has our gross profit margin changed over the past year across different product lines?"
							}
						]
					},
					{
						id: "msg-margin-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Gross Profit Margin Analysis by Product Line\n\nI've analyzed the profit margin data across your four main product lines for the past 12 months. Here are the key observations:\n\n- **Electronics**: Started at 32% and gradually improved to 38%, showing the most consistent upward trend\n- **Furniture**: Experienced volatility between 28-35%, ending the year at 33%\n- **Appliances**: Maintained the highest margins overall (36-42%), with strong performance in Q4\n- **Office Supplies**: Showed the lowest margins (24-29%), but has been steadily improving\n\nHere's a visualization of the quarterly trends:"
							},
							{
								type: "tool-invocation",
								toolName: "line-chart",
								title: "Gross Profit Margins by Product Line",
								description: "Quarterly trends across product categories",
								xAxisDataKey: "quarter",
								content: [
									{
										quarter: "Q1",
										Electronics: 32,
										Furniture: 28,
										Appliances: 36,
										"Office Supplies": 24
									},
									{
										quarter: "Q2",
										Electronics: 34,
										Furniture: 35,
										Appliances: 38,
										"Office Supplies": 25
									},
									{
										quarter: "Q3",
										Electronics: 35,
										Furniture: 30,
										Appliances: 37,
										"Office Supplies": 27
									},
									{
										quarter: "Q4",
										Electronics: 38,
										Furniture: 33,
										Appliances: 42,
										"Office Supplies": 29
									}
								]
							},
							{
								type: "text",
								content:
									"### Actionable Insights\n\n- **Electronics** shows the most promising trend with a 6% margin improvement, likely due to your new supplier agreements\n- **Furniture** margins fluctuated significantly, suggesting inconsistent manufacturing or shipping costs that need investigation\n- **Appliances** continue to be your most profitable segment, with the Q4 spike coinciding with your premium model launch\n- **Office Supplies** would benefit from the pricing strategy adjustments we discussed last quarter, as the gradual improvements show promise\n\nBased on these trends, I recommend focusing on:\n\n1. Expanding your appliance product line for Q1 next year\n2. Investigating cost inconsistencies in the furniture supply chain\n3. Applying the electronics supplier strategy to office supplies to accelerate margin improvement\n\nWould you like me to prepare a detailed analysis of which specific products are driving these margin changes within each category?"
							}
						]
					}
				]
			}
		]
	},
	{
		id: "c414ef35-f552-4b4b-ad18-ce1766a879c5",
		title: "Cash Flow Report",
		url: "cash-flow-report",
		icon: "exchange",
		created_at: subDays(new Date(), 2).toISOString(),
		chats: [
			{
				id: "8ea7103d-643d-44aa-aa2b-c1fac791e30f",
				title: "Operating Cash Flow Trends",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-opcf-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"How has our operating cash flow performed over the past 12 months compared to net income?"
							}
						]
					},
					{
						id: "msg-opcf-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Operating Cash Flow vs. Net Income Analysis\n\nI've analyzed your monthly operating cash flow and net income data from the ERP system. Here's what the trends show:\n\n- Your operating cash flow has **exceeded net income** in 9 out of 12 months, indicating strong cash conversion\n- The average operating cash flow to net income ratio is approximately **1.28**, showing effective working capital management\n- There was a significant **cash flow spike in October** due to accelerated customer payments before the holiday season\n- **March and June** showed lower cash flow ratios, likely due to inventory buildups for seasonal demand\n\nHere's a visualization of the monthly comparison:"
							},
							{
								type: "tool-invocation",
								toolName: "line-chart",
								title: "Monthly Operating Cash Flow vs. Net Income",
								description: "12-month performance comparison",
								xAxisDataKey: "month",
								content: [
									{
										month: "Jan",
										"Operating Cash Flow": 142000,
										"Net Income": 118000
									},
									{
										month: "Feb",
										"Operating Cash Flow": 156000,
										"Net Income": 125000
									},
									{
										month: "Mar",
										"Operating Cash Flow": 138000,
										"Net Income": 132000
									},
									{
										month: "Apr",
										"Operating Cash Flow": 167000,
										"Net Income": 145000
									},
									{
										month: "May",
										"Operating Cash Flow": 189000,
										"Net Income": 152000
									},
									{
										month: "Jun",
										"Operating Cash Flow": 172000,
										"Net Income": 168000
									},
									{
										month: "Jul",
										"Operating Cash Flow": 198000,
										"Net Income": 157000
									},
									{
										month: "Aug",
										"Operating Cash Flow": 210000,
										"Net Income": 163000
									},
									{
										month: "Sep",
										"Operating Cash Flow": 205000,
										"Net Income": 172000
									},
									{
										month: "Oct",
										"Operating Cash Flow": 245000,
										"Net Income": 178000
									},
									{
										month: "Nov",
										"Operating Cash Flow": 228000,
										"Net Income": 187000
									},
									{
										month: "Dec",
										"Operating Cash Flow": 235000,
										"Net Income": 195000
									}
								]
							},
							{
								type: "text",
								content:
									"### Key Business Insights\n\n- **Strong Cash Generation**: Your business consistently generates more cash than accounting profits, indicating healthy operations\n- **Seasonal Patterns**: The data shows Q4 as your strongest cash flow period, which aligns with industry seasonal trends\n- **Working Capital Efficiency**: The growing gap between cash flow and income suggests improving efficiency in managing receivables and payables\n- **Potential Opportunities**: The October spike demonstrates the positive impact of accounts receivable initiatives - consider implementing similar programs quarterly\n\nWould you like me to analyze the specific components of operating cash flow to identify which factors are contributing most to the positive trend?"
							}
						]
					}
				]
			},
			{
				id: "34cea813-4adc-49f6-856e-3564dff63c71",
				title: "Investing Cash Flow Analysis",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-invcf-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"What's the breakdown of our investing cash flow for the past year? I want to understand our capital allocation."
							}
						]
					},
					{
						id: "msg-invcf-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Investing Cash Flow Breakdown Analysis\n\nI've analyzed your investing activities for the past fiscal year. Here's the breakdown of how capital has been allocated:\n\n- **Total investing cash outflow**: $3.45 million\n- **Property & Equipment**: $2.1 million (60.9% of investing cash flow)\n- **Technology & Software**: $650,000 (18.8%)\n- **Business Acquisitions**: $420,000 (12.2%)\n- **Long-term Investments**: $280,000 (8.1%)\n\nYour investing activities were concentrated primarily in Q2 and Q4, aligning with your strategic expansion initiatives."
							},
							{
								type: "tool-invocation",
								toolName: "pie-chart",
								title: "Investment Capital Allocation",
								description: "Breakdown of annual investing cash flow",
								content: [
									{
										name: "Property & Equipment",
										value: 2100000,
										fill: "hsl(var(--chart-1))"
									},
									{
										name: "Technology & Software",
										value: 650000,
										fill: "hsl(var(--chart-2))"
									},
									{
										name: "Business Acquisitions",
										value: 420000,
										fill: "hsl(var(--chart-3))"
									},
									{
										name: "Long-term Investments",
										value: 280000,
										fill: "hsl(var(--chart-4))"
									}
								]
							},
							{
								type: "text",
								content:
									"### Quarterly Investment Distribution\n\nLooking at the quarterly patterns, I notice distinct investment strategies throughout the year:"
							},
							{
								type: "tool-invocation",
								toolName: "bar-chart",
								title: "Quarterly Investment Breakdown",
								description: "Investment categories by quarter",
								xAxisDataKey: "quarter",
								content: [
									{
										quarter: "Q1",
										"Property & Equipment": 380000,
										"Technology & Software": 120000,
										"Business Acquisitions": 0,
										"Long-term Investments": 50000
									},
									{
										quarter: "Q2",
										"Property & Equipment": 650000,
										"Technology & Software": 180000,
										"Business Acquisitions": 320000,
										"Long-term Investments": 70000
									},
									{
										quarter: "Q3",
										"Property & Equipment": 420000,
										"Technology & Software": 150000,
										"Business Acquisitions": 0,
										"Long-term Investments": 60000
									},
									{
										quarter: "Q4",
										"Property & Equipment": 650000,
										"Technology & Software": 200000,
										"Business Acquisitions": 100000,
										"Long-term Investments": 100000
									}
								]
							},
							{
								type: "text",
								content:
									"### Strategic Analysis\n\n- **Capacity Expansion**: The significant investment in property and equipment (60.9%) aligns with your five-year growth plan\n- **Digital Transformation**: Technology investments are increasing quarter-over-quarter, reflecting your commitment to automation\n- **Acquisition Strategy**: The major acquisition in Q2 was the Johnson Manufacturing asset purchase, which is already yielding a 14% ROI\n- **Investment Portfolio**: Your long-term investments have increased in Q4, diversifying your capital allocation\n\nBased on industry benchmarks, your investing cash flow distribution indicates a **growth-focused strategy** with appropriate balance between expanding existing operations and exploring new opportunities.\n\nWould you like me to provide a comparative analysis against your competitors' investment patterns or explore the expected ROI for each investment category?"
							}
						]
					}
				]
			},
			{
				id: "92eaf6bc-d68d-41ab-8cde-49eb58a3ad2a",
				title: "Yearly Cash Flow Forecasting",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-fcf-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Based on our historical data, what's our projected free cash flow for next year on a quarterly basis?"
							}
						]
					},
					{
						id: "msg-fcf-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"### Free Cash Flow Forecast for Next Year\n\nI've generated a quarterly free cash flow forecast based on three years of historical data from your ERP system, factoring in seasonality patterns, growth trends, and your planned capital expenditures. Here's what the projection shows:\n\n- **Q1 Forecast**: $310,000 (12% increase from current year Q1)\n- **Q2 Forecast**: $385,000 (15% increase from current year Q2)\n- **Q3 Forecast**: $422,000 (18% increase from current year Q3)\n- **Q4 Forecast**: $508,000 (14% increase from current year Q4)\n\nTotal annual projected free cash flow: **$1,625,000** (14.8% increase year-over-year)\n\nHere's a visualization comparing the projected cash flow against historical performance:"
							},
							{
								type: "tool-invocation",
								toolName: "bar-chart",
								title: "Historical & Projected Free Cash Flow",
								description: "Quarterly comparison with next year forecast",
								xAxisDataKey: "quarter",
								content: [
									{ quarter: "Q1 Last Year", "Free Cash Flow": 245000 },
									{ quarter: "Q1 Current", "Free Cash Flow": 276000 },
									{ quarter: "Q1 Forecast", "Free Cash Flow": 310000 },
									{ quarter: "Q2 Last Year", "Free Cash Flow": 292000 },
									{ quarter: "Q2 Current", "Free Cash Flow": 335000 },
									{ quarter: "Q2 Forecast", "Free Cash Flow": 385000 },
									{ quarter: "Q3 Last Year", "Free Cash Flow": 304000 },
									{ quarter: "Q3 Current", "Free Cash Flow": 358000 },
									{ quarter: "Q3 Forecast", "Free Cash Flow": 422000 },
									{ quarter: "Q4 Last Year", "Free Cash Flow": 391000 },
									{ quarter: "Q4 Current", "Free Cash Flow": 445000 },
									{ quarter: "Q4 Forecast", "Free Cash Flow": 508000 }
								]
							},
							{
								type: "text",
								content:
									"### Forecast Assumptions & Risk Analysis\n\n**Key Growth Drivers:**\n- 8% projected revenue growth based on current sales pipeline\n- Margin improvement of 2.1% from operational efficiency initiatives\n- Working capital optimization from the new inventory management system\n- Reduced days sales outstanding from automated collection processes\n\n**Risk Factors:**\n- The Q2 forecast assumes the Smith contract renewal ($1.2M annually)\n- Q3 projection includes expected cost savings from the IT infrastructure upgrade\n- Q4 forecast partially depends on the new product line launch in October\n\n**Sensitivity Analysis:**\n- A 5% decrease in projected revenue would reduce total FCF by approximately $135,000\n- A one-month delay in the IT upgrade would impact Q3 FCF by approximately $45,000\n\nWould you like me to provide more details on any specific aspect of the forecast or prepare cash flow scenarios based on different assumptions?"
							}
						]
					}
				]
			}
		]
	},
	{
		id: "415c8d67-6c86-4d5d-a434-997e5a53f2c6",
		title: "Accounts Payable Summary",
		url: "accounts-payable-summary",
		icon: "credit-card",
		created_at: subDays(new Date(), 3).toISOString(),
		chats: [
			{
				id: "13875619-c198-4066-8a2f-01e683bbd224",
				title: "Pending Vendor Payments",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-pv-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Can you provide me with a summary of our pending vendor payments that are due in the next 15 days?"
							}
						]
					},
					{
						id: "msg-pv-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Pending Vendor Payments Due in Next 15 Days\n\nI've analyzed your accounts payable data and found 27 pending vendor payments due within the next 15 days, totaling **$257,843.92**.\n\n### Payment Breakdown by Priority\n\n- **High Priority (Due in 0-5 days)**: $108,276.45 (42% of total)\n  - Atlas Office Supplies: $23,450.00 (due in 2 days)\n  - Johnson Manufacturing: $42,876.45 (due in 3 days)\n  - Tech Solutions Inc.: $41,950.00 (due in 5 days)\n\n- **Medium Priority (Due in 6-10 days)**: $92,567.47 (36% of total)\n  - Global Logistics Partners: $37,845.22 (due in 7 days)\n  - Westside Materials: $29,722.25 (due in 8 days)\n  - Quality Industrial Products: $25,000.00 (due in 10 days)\n\n- **Standard Priority (Due in 11-15 days)**: $57,000.00 (22% of total)\n  - Hammond Electrical Supply: $18,750.00 (due in 12 days)\n  - Premier Packaging: $22,250.00 (due in 14 days)\n  - Richardson Consulting: $16,000.00 (due in 15 days)\n\n### Available Payment Discounts\n\n- **Early Payment Opportunities**: 4 invoices qualify for a 2% discount if paid within the next 5 days, potentially saving **$2,165.53**\n\n### Cash Flow Impact\n\nBased on your current cash position of $425,000 and projected incoming payments of $183,000, you have sufficient liquidity to cover all pending payments while maintaining your minimum cash reserve threshold of $300,000.\n\nWould you like me to prepare payment batches organized by vendor or due date for your approval?"
							}
						]
					},
					{
						id: "msg-pv-3",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Yes, could you organize the payment batches by due date? Also, which vendors have we consistently paid late over the past 3 months?"
							}
						]
					},
					{
						id: "msg-pv-4",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Payment Batches by Due Date\n\n### Batch 1: Due in 0-5 Days (Total: $108,276.45)\n\n| Vendor | Invoice ## | Amount | Due Date | Days Until Due | Discount Available |\n|--------|----------|--------|----------|----------------|--------------------|\n| Atlas Office Supplies | INV-2023-8764 | $23,450.00 | Jun 15, 2023 | 2 | Yes - 2% ($469.00) |\n| Johnson Manufacturing | JM-29845 | $42,876.45 | Jun 16, 2023 | 3 | Yes - 2% ($857.53) |\n| Tech Solutions Inc. | TS-45982 | $41,950.00 | Jun 18, 2023 | 5 | No |\n\n### Batch 2: Due in 6-10 Days (Total: $92,567.47)\n\n| Vendor | Invoice ## | Amount | Due Date | Days Until Due | Discount Available |\n|--------|----------|--------|----------|----------------|--------------------|\n| Global Logistics Partners | GLP-7723 | $37,845.22 | Jun 20, 2023 | 7 | Yes - 2% ($756.90) |\n| Westside Materials | WSM-3492 | $29,722.25 | Jun 21, 2023 | 8 | No |\n| Quality Industrial Products | QIP-11284 | $25,000.00 | Jun 23, 2023 | 10 | No |\n\n### Batch 3: Due in 11-15 Days (Total: $57,000.00)\n\n| Vendor | Invoice ## | Amount | Due Date | Days Until Due | Discount Available |\n|--------|----------|--------|----------|----------------|--------------------|\n| Hammond Electrical Supply | HES-5582 | $18,750.00 | Jun 25, 2023 | 12 | Yes - 1% ($187.50) |\n| Premier Packaging | PP-33476 | $22,250.00 | Jun 27, 2023 | 14 | No |\n| Richardson Consulting | RC-2023-42 | $16,000.00 | Jun 28, 2023 | 15 | No |\n\n## Vendors with Late Payment History (Past 3 Months)\n\n### Consistently Late Payments\n\n1. **Johnson Manufacturing**\n   - 5 out of 7 invoices paid late (average 8 days beyond terms)\n   - Recent trend: Improving (last invoice paid only 2 days late)\n   - Note: Strategic supplier with limited alternatives; communication regarding payment terms in progress\n\n2. **Westside Materials**\n   - 4 out of 4 invoices paid late (average 12 days beyond terms)\n   - Recent trend: Worsening (latest invoice paid 15 days late)\n   - Note: Vendor has not enforced late payment penalties due to long-standing relationship\n\n3. **Premier Packaging**\n   - 3 out of 5 invoices paid late (average 6 days beyond terms)\n   - Recent trend: Stable\n   - Note: Invoice approval delays in Purchasing department identified as root cause\n\n### Recommended Actions\n\n1. Prioritize Johnson Manufacturing's current invoice for immediate payment to leverage discount and improve vendor relationship\n2. Schedule Westside Materials' payment immediately to prevent further deterioration of payment history\n3. Review invoice approval process with Purchasing department to address Premier Packaging delays\n\nWould you like me to initiate these payment batches in the system for your approval, or would you like to modify any of the payment priorities?"
							}
						]
					}
				]
			},
			{
				id: "b6e591c2-e83a-449b-a2a1-e961bb1159ee",
				title: "Overdue Invoices Analysis",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-overdue-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Could you analyze our current overdue invoices situation? I need to understand where we stand with late payments to vendors."
							}
						]
					},
					{
						id: "msg-overdue-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Overdue Invoices Analysis\n\nI've analyzed your accounts payable data in the ERP system. Here's a comprehensive overview of your current overdue invoice situation:\n\n### Current Overdue Status\n\nYour total overdue amount stands at **$247,850** across 43 invoices. This represents approximately 18% of your total accounts payable balance.\n\n### Aging Analysis\n\n- **1-30 days overdue**: $126,500 (51% of overdue amount)\n- **31-60 days overdue**: $78,350 (32% of overdue amount)\n- **61-90 days overdue**: $28,000 (11% of overdue amount)\n- **>90 days overdue**: $15,000 (6% of overdue amount)\n\n### Top 5 Vendors with Overdue Invoices\n\n1. **Precision Manufacturing Inc.**: $58,400 (3 invoices, largest 45 days overdue)\n2. **Global Supply Solutions**: $42,700 (5 invoices, largest 28 days overdue)\n3. **TechServe Innovations**: $36,200 (2 invoices, largest 62 days overdue)\n4. **Industrial Equipment Corp**: $25,500 (4 invoices, largest 37 days overdue)\n5. **Quality Raw Materials Ltd**: $22,850 (3 invoices, largest 52 days overdue)\n\nThese top 5 vendors account for 75% of your total overdue amount.\n\n### Risk Assessment\n\n- **High Risk**: $15,000 (>90 days, potential for credit holds or legal action)\n- **Medium Risk**: $64,200 (61-90 days, risk of damaged vendor relationships)\n- **Moderate Risk**: $78,350 (31-60 days, may impact future payment terms)\n- **Low Risk**: $90,300 (1-30 days, minimal business impact)\n\n### Root Cause Analysis\n\nI've identified several patterns in your overdue invoices:\n\n1. **Approval Delays**: 42% of overdue invoices were stuck in approval workflows for >10 days\n2. **Missing Documents**: 25% were missing receiving information or supporting documentation\n3. **Disputed Amounts**: 18% had price or quantity discrepancies requiring resolution\n4. **Payment Timing**: 15% were correctly processed but scheduled for payment after due dates\n\n### Recommendations\n\n1. **Immediate Action**: Process the $15,000 in high-risk invoices (>90 days) within 48 hours\n2. **Process Improvement**: Review approval workflows for TechServe and Quality Raw Materials\n3. **Vendor Communication**: Establish communication with Precision Manufacturing regarding their large overdue amounts\n4. **Policy Update**: Consider implementing a twice-weekly payment run instead of monthly to reduce aging\n5. **Document Matching**: Improve three-way matching process to reduce documentation issues\n\nWould you like me to draft a prioritized payment schedule or provide more detailed analysis of any specific aspect of these overdue invoices?"
							}
						]
					},
					{
						id: "msg-overdue-3",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"This is helpful. Could you tell me more about the potential financial impact of these overdue invoices on our business?"
							}
						]
					},
					{
						id: "msg-overdue-4",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Financial Impact of Overdue Invoices\n\nI've analyzed the potential financial implications of your current overdue invoice situation:\n\n### Immediate Financial Consequences\n\n#### 1. Late Payment Penalties\n\nBased on your vendor contracts, I estimate potential late payment penalties of approximately **$7,435**:\n\n- Precision Manufacturing: $2,336 (4% penalty on invoices >45 days)\n- TechServe Innovations: $1,810 (5% penalty on invoices >60 days)\n- Other vendors: $3,289 (various rates between 2-3%)\n\n#### 2. Lost Early Payment Discounts\n\nBy missing payment deadlines, you've forfeited approximately **$4,957** in early payment discounts:\n\n- Global Supply Solutions: $2,135 (5% discount if paid within 10 days)\n- Industrial Equipment Corp: $1,275 (2.5% discount if paid within 15 days)\n- Other vendors: $1,547 (various discount rates)\n\n#### 3. Credit Rating Impact\n\nYour D&B Paydex score has dropped from 78 to 72 over the past quarter, primarily due to the >90 day overdue accounts. This could impact your:\n\n- Insurance premiums (+0.5% estimated increase)\n- Future credit terms with new vendors\n- Banking relationship and loan terms\n\n### Long-term Business Implications\n\n#### 1. Vendor Relationship Deterioration\n\n- **TechServe Innovations**: Given their strategic importance as your primary IT infrastructure provider, the 62-day overdue invoice puts you at high risk of service interruptions\n- **Precision Manufacturing**: As a sole-source supplier for critical components, their overdue balance creates significant operational risk\n\n#### 2. Supply Chain Vulnerability\n\n- Two vendors (Global Supply and Quality Raw Materials) have already placed your account on credit hold for new orders\n- Three additional vendors may implement pre-payment requirements based on their credit policies\n\n#### 3. Operational Consequences\n\n- Staff productivity impact: Accounting team currently spending ~15 hours weekly on collections calls and dispute management\n- Management distraction: Finance leadership diverted from strategic initiatives to handle escalated vendor issues\n\n### Cash Flow Optimization Opportunities\n\nAddressing your overdue invoices would create these opportunities:\n\n1. **Payment Restructuring**: Negotiating extended payment terms with 7 key vendors could improve cash flow by $125,000 quarterly\n2. **Discount Capture**: Implementing systematic early payment processing could save $35,000+ annually\n3. **Process Efficiency**: Automating the approval workflow could reduce invoice processing time by 62%, allowing you to capture more favorable payment terms\n\nWould you like me to develop a detailed payment prioritization strategy to address these financial impacts, or would you prefer a deeper analysis of any specific aspect?"
							}
						]
					}
				]
			},
			{
				id: "c8a5899b-d581-45f5-bc1a-ed4f3c19a9f5",
				title: "AP Aging Report Review",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-ap-1",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"Can you analyze our current AP aging report and highlight any concerning trends or issues we should address?"
							}
						]
					},
					{
						id: "msg-ap-2",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Accounts Payable Aging Analysis\n\n### Summary Overview\n\nI've analyzed your current AP aging report as of June 13, 2023. Your total outstanding accounts payable balance is **$1,427,892.45** across 127 invoices.\n\n#### Aging Breakdown:\n\n| Aging Category | Amount | % of Total | ## of Invoices | % Change vs. Last Month |\n|---------------|--------|------------|--------------|-------------------------|\n| Current (0-30 days) | $872,345.23 | 61.1% | 76 | +4.2% |\n| 31-60 days | $342,765.88 | 24.0% | 28 | +12.8% |\n| 61-90 days | $142,568.33 | 10.0% | 15 | -8.3% |\n| >90 days | $70,213.01 | 4.9% | 8 | +32.6% |\n\n### Key Observations & Concerns\n\n#### 1. Significant Increase in 31-60 Day Category (+12.8%)\n\n- **Pattern Detected**: Primarily driven by invoices from three major suppliers:\n  - Advanced Electronics ($98,432.56)\n  - Precision Components ($76,543.21)\n  - Northern Distribution ($45,678.90)\n\n- **Root Cause**: Analysis shows these invoices were received on time but held in the approval process due to unresolved quantity discrepancies.\n\n#### 2. Alarming Growth in >90 Days Category (+32.6%)\n\n- **High Risk Vendors**: \n  - Industrial Solutions has 3 invoices totaling $42,567.89 now exceeding 120 days\n  - These invoices have been disputed but remain unresolved for over 60 days\n\n- **Potential Consequences**:\n  - Industrial Solutions has notified account suspension effective June 30 if payment is not received\n  - This vendor supplies critical production components with limited alternative sources\n\n#### 3. Payment Terms Compliance Issues\n\n- Your actual payment timing versus agreed terms:\n\n| Payment Terms | Average Days to Pay | Compliance Rate | Invoices Affected |\n|---------------|---------------------|----------------|-------------------|\n| Net 30 | 38.4 days | 72% | 84 invoices |\n| Net 45 | 52.7 days | 81% | 31 invoices |\n| Net 60 | 64.2 days | 88% | 12 invoices |\n\n- **Finding**: Compliance is weakest with shorter payment terms vendors\n\n### Financial Implications\n\n#### 1. Lost Discount Opportunities \n\n- **Past 30 Days**: 14 invoices missed early payment discounts totaling $8,734.56\n- **Past 90 Days**: 47 invoices missed discounts totaling $23,567.89\n\n#### 2. Late Payment Penalties\n\n- **Incurred Penalties**: $4,532.67 in the past quarter\n- **At-Risk Amount**: $7,845.23 in potential penalties on currently overdue invoices\n\n#### 3. Cash Flow Projection Impact\n\n- **July Payment Forecast**: ~$485,000 needed for invoices in 31-60 day category\n- **August Risk**: ~$213,000 for invoices currently in 61-90 day category\n\n### Recommended Actions\n\n#### Immediate Priorities (Next 7 Days)\n\n1. **Resolve Industrial Solutions Crisis**:\n   - Escalate $42,567.89 in disputed invoices to finance leadership\n   - Propose partial payment of undisputed portions ($28,345.67)\n   - Schedule vendor call to negotiate payment plan for remaining balance\n\n2. **Quantity Discrepancy Resolution**:\n   - Create task force to address the three major suppliers in 31-60 day category\n   - Set 48-hour resolution deadline for all discrepancies\n\n#### Short-term Actions (Next 30 Days)\n\n1. **Payment Terms Review**:\n   - Identify vendors with consistently missed payment terms\n   - Renegotiate terms where necessary to align with actual payment capabilities\n\n2. **Early Payment Discount Program**:\n   - Implement prioritization for invoices with available discounts\n   - Create automated flagging system for discount deadlines\n\n#### Systemic Improvements\n\n1. **AP Process Efficiency**:\n   - Establish new KPI: 85% of invoices paid within terms by Q3\n   - Reduce approval cycle time from current 8.3 days to target 3.0 days\n\n2. **Vendor Communication**:\n   - Implement proactive notification system for delayed payments\n   - Create dedicated dispute resolution process with 15-day maximum resolution time\n\nWould you like me to develop a detailed plan for any specific area of concern?"
							}
						]
					},
					{
						id: "msg-ap-3",
						role: "user",
						data: [
							{
								type: "text",
								content:
									"This is great analysis. I'm especially concerned about the Industrial Solutions situation. Can you give me more details about those specific invoices and what led to the disputes?"
							}
						]
					},
					{
						id: "msg-ap-4",
						role: "assistant",
						data: [
							{
								type: "text",
								content:
									"## Industrial Solutions Dispute Analysis\n\n### Invoice Details\n\n| Invoice Number | Date Received | Original Amount | Disputed Amount | Current Age | Payment Status |\n|---------------|--------------|----------------|----------------|------------|----------------|\n| IS-29845 | February 3, 2023 | $23,456.78 | $8,234.56 | 130 days | Full Hold |\n| IS-30157 | February 18, 2023 | $12,345.67 | $12,345.67 | 115 days | Full Hold |\n| IS-30982 | March 7, 2023 | $6,765.44 | $1,432.33 | 98 days | Full Hold |\n| **TOTAL** | | **$42,567.89** | **$22,012.56** | | |\n\n### Dispute History Timeline\n\n#### Invoice IS-29845 ($23,456.78)\n\n1. **February 3**: Invoice received for quarterly equipment maintenance\n2. **February 10**: Operations manager flags pricing discrepancy - invoice rates exceed contracted rates by 15%\n3. **February 15**: AP sends dispute notification to vendor\n4. **February 28**: Vendor acknowledges receipt but requests service logs to verify\n5. **March 10**: Operations provides service logs showing fewer service hours than billed\n6. **March 22**: Vendor disagrees with assessment, claims emergency weekend work justifies higher rates\n7. **April 5**: Meeting between operations and vendor results in partial agreement\n8. **April 18**: Vendor agrees to reduce invoice by $4,500 but maintains weekend premium charges\n9. **May 3**: Operations manager changes position, requests further reductions\n10. **May 25**: Vendor sends final notice with threat to suspend service\n11. **Current status**: Deadlocked - Operations refuses to approve; Vendor refuses further concessions\n\n#### Invoice IS-30157 ($12,345.67)\n\n1. **February 18**: Invoice received for emergency repair parts\n2. **February 25**: Receiving department flags issue - 2 of 5 parts missing upon delivery\n3. **March 2**: AP notifies vendor of missing items\n4. **March 15**: Vendor provides signed delivery receipt showing all items delivered\n5. **March 28**: Internal investigation reveals parts were delivered but sent to incorrect department\n6. **April 10**: Parts located in R&D lab, but one part ($5,432.10) damaged during unauthorized testing\n7. **April 22**: Operations requests vendor credit for damaged part\n8. **May 5**: Vendor refuses credit as damage occurred after confirmed delivery\n9. **May 18**: Legal department advises payment is legally required as damage occurred post-delivery\n10. **Current status**: Operations director still refusing approval despite legal recommendation\n\n#### Invoice IS-30982 ($6,765.44)\n\n1. **March 7**: Invoice received for technical consultation services\n2. **March 14**: Project manager disputes hours billed (45 hours vs. 32 hours actually worked)\n3. **March 22**: AP requests timesheet verification from vendor\n4. **April 8**: Vendor provides signed timesheets by project manager assistant (not by manager)\n5. **April 15**: Project manager claims assistant wasn't authorized to approve timesheets\n6. **April 30**: Vendor provides email trail showing project manager was on vacation and delegated authority\n7. **May 10**: Project manager still disputes validity of delegation process\n8. **Current status**: HR reviewing delegation procedures; payment pending policy clarification\n\n### Risk Assessment\n\n#### Business Impact of Service Suspension\n\n- Industrial Solutions is the **exclusive maintenance provider** for key production equipment\n- Service suspension would affect **3 production lines** with estimated revenue impact of **$85,000 per day**\n- Alternative vendor onboarding would require **minimum 3-4 weeks** and emergency rates (+40%)\n\n#### Contract Terms Review\n\n- Your master service agreement includes a dispute resolution clause requiring payment of **undisputed portions within 45 days**\n- Current situation places you in breach of contract on all three invoices\n- Vendor has legal grounds for service suspension per section 8.3 of the MSA\n\n### Recommended Resolution Path\n\n#### 1. Immediate Payment Recommendation\n\n| Invoice | Recommended Payment | Justification |\n|---------|---------------------|---------------|\n| IS-29845 | $15,222.22 | Pay undisputed portion immediately |\n| IS-30157 | $12,345.67 | Pay full amount per legal advice |\n| IS-30982 | $5,333.11 | Pay for 32 verified hours at contracted rate |\n| **TOTAL** | **$32,901.00** | **77% of outstanding balance** |\n\n#### 2. Negotiation Strategy\n\n- Offer immediate payment of $32,901.00 in exchange for:\n  - Service continuation guarantee for minimum 90 days\n  - Structured negotiation for remaining $9,666.89\n  - Removal of account suspension status\n\n#### 3. Process Remediation\n\n- Institute mandatory 10-day maximum for initial dispute documentation\n- Implement payment of undisputed portions within standard terms\n- Create escalation path when disputes exceed 30 days\n- Establish executive review for any disputes affecting critical vendors\n\nWould you like me to draft a communication to Industrial Solutions with the proposed resolution plan?"
							}
						]
					}
				]
			}
		]
	}
]);

/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */

function generateRandomDate() {
	const now = new Date();
	const randomPercentage = Math.random();

	const date = new Date(now);

	if (randomPercentage < 0.85) {
		// 85% of the time, generate a date within the last week
		const daysAgo = faker.number.int({ min: 1, max: 7 });
		date.setDate(now.getDate() - daysAgo);
	} else {
		// 15% of the time, generate a date within the last month or last 3 months
		const monthsAgo = faker.number.int({ min: 1, max: 3 });
		date.setMonth(now.getMonth() - monthsAgo);
	}

	return date.toISOString();
}

/* -------------------------------------------------------------------------- */

/**
 * Utility function to sort an array of ERPCategories by their created_at date in descending order.
 *
 * @param categories - The array of ERPCategories to be sorted.
 * @returns The sorted array of ERPCategories.
 */
export function sortByDate(categories: ERPCategory[]): ERPCategory[] {
	return categories.sort((a, b) =>
		compareDesc(parseISO(a.created_at), parseISO(b.created_at))
	);
}

/* -------------------------------------------------------------------------- */

type GroupedChats = {
	title: string;
	group: ERPChat[];
};

/**
 * Groups an array of ERPChat objects by their creation date into categories such as "Today", "Yesterday", "This Week", "This Month", and specific months.
 *
 * @param chats - The array of ERPChat objects to be grouped.
 * @returns An array of GroupedChats objects, each containing a title and a group of ERPChat objects.
 *
 * @example
 * const chats = [
 *   { id: "1", title: "Chat 1", created_at: "2023-10-01T10:00:00Z" },
 *   { id: "2", title: "Chat 2", created_at: "2023-10-02T10:00:00Z" },
 *   { id: "3", title: "Chat 3", created_at: "2023-09-30T10:00:00Z" }
 * ];
 * const groupedChats = groupChatsByDate(chats);
 * // groupedChats will be:
 * // [
 * //   { title: "Today", group: [{ id: "2", ... }] },
 * //   { title: "This Month", group: [{ id: "1", ... }] },
 * //   { title: "September", group: [{ id: "3", ... }] }
 * // ]
 */
export const groupChatsByDate = (chats: ERPChat[]): GroupedChats[] => {
	const grouped: { [key: string]: ERPChat[] } = {};

	chats.forEach((chat) => {
		const date = parseISO(chat.created_at);
		let groupTitle = "";

		if (isToday(date)) {
			groupTitle = "Today";
		} else if (isYesterday(date)) {
			groupTitle = "Yesterday";
		} else if (isThisWeek(date)) {
			groupTitle = "This Week";
		} else if (isThisMonth(date)) {
			groupTitle = "This Month";
		} else {
			groupTitle = format(date, "MMMM");
		}

		if (!grouped[groupTitle]) {
			grouped[groupTitle] = [];
		}
		grouped[groupTitle].push(chat);
	});

	const sortedTitles = ["Today", "Yesterday", "This Week", "This Month"];

	return Object.keys(grouped)
		.sort((a, b) => {
			const indexA = sortedTitles.indexOf(a);
			const indexB = sortedTitles.indexOf(b);

			if (indexA === -1 && indexB === -1) {
				return a.localeCompare(b);
			}

			if (indexA === -1) return 1;
			if (indexB === -1) return -1;

			return indexA - indexB;
		})
		.map((title) => ({
			title,
			group: grouped[title]
		}));
};
