import {
	compareDesc,
	format,
	isThisMonth,
	isThisWeek,
	isToday,
	isYesterday,
	parseISO
} from "date-fns";
import { faker } from "@faker-js/faker";
import { ERPCategory, ERPChat } from "@/types";

export const fakeERPCategories: ERPCategory[] = sortByDate([
	{
		id: "1f0e3822-d06d-488b-8c10-193134a18144",
		title: "Balance Sheet Overview",
		icon: "spread-sheet",
		url: "balance-sheet-overview",
		created_at: generateRandomDate(),
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
								content: "What are the main components of assets?"
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
									"### Main Components of Assets\n\n" +
									"Assets are generally categorized into two main types: **current** and **non-current** assets.\n\n" +
									"- **Current assets** include:\n  - Cash and cash equivalents\n  - Accounts receivable\n  - Inventory\n  - Short-term investments\n\n" +
									"- **Non-current assets** include:\n  - Property, plant, and equipment (PP&E)\n  - Intangible assets (patents, trademarks)\n  - Long-term investments\n\n" +
									"Understanding these categories helps businesses maintain liquidity and plan for long-term financial stability.\n\n" +
									"*Sources: Corporate Finance Institute, Investopedia*"
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
				title: "JavaScript Implementation",
				created_at: generateRandomDate(),
				messages: [
					{
						id: "msg-dev-3",
						role: "user",
						data: [
							{
								type: "text",
								content: "How can I calculate the current ratio in JavaScript?"
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
									"### Calculating Current Ratio in JavaScript\n\n" +
									"The **current ratio** measures a company's liquidity. It is calculated as:\n\n" +
									"```Current Ratio = Current Assets / Current Liabilities```\n\n" +
									"Here’s how you can implement it in JavaScript:\n\n" +
									"```js\n" +
									"function calculateCurrentRatio(currentAssets, currentLiabilities) {\n" +
									"  if (currentLiabilities === 0) {\n" +
									"    throw new Error('Liabilities cannot be zero');\n" +
									"  }\n" +
									"  return currentAssets / currentLiabilities;\n" +
									"}\n\n" +
									"const currentAssets = 50000;\n" +
									"const currentLiabilities = 20000;\n\n" +
									"console.log('Current Ratio:', calculateCurrentRatio(currentAssets, currentLiabilities));\n" +
									"```\n\n" +
									"This function calculates the **current ratio** by dividing assets by liabilities.\n\n" +
									"*Sources: Financial Times, Investopedia*"
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
		created_at: generateRandomDate(),
		chats: [
			{
				id: "baa1b611-f02e-4d89-9860-bb9ca2393598",
				title: "Revenue vs. Expenses Overview",
				created_at: generateRandomDate()
			},
			{
				id: "481bbe59-807c-472b-a74d-09dbadc2da75",
				title: "Gross Profit Margin Trends",
				created_at: generateRandomDate()
			}
		]
	},
	{
		id: "c414ef35-f552-4b4b-ad18-ce1766a879c5",
		title: "Cash Flow Report",
		url: "cash-flow-report",
		icon: "exchange",
		created_at: generateRandomDate(),
		chats: [
			{
				id: "8ea7103d-643d-44aa-aa2b-c1fac791e30f",
				title: "Operating Cash Flow Trends",
				created_at: generateRandomDate()
			},
			{
				id: "34cea813-4adc-49f6-856e-3564dff63c71",
				title: "Investing Cash Flow Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "92eaf6bc-d68d-41ab-8cde-49eb58a3ad2a",
				title: "Yearly Cash Flow Forecasting",
				created_at: generateRandomDate()
			}
		]
	},
	{
		id: "415c8d67-6c86-4d5d-a434-997e5a53f2c6",
		title: "Accounts Payable Summary",
		url: "accounts-payable-summary",
		icon: "credit-card",
		created_at: generateRandomDate(),
		chats: [
			{
				id: "13875619-c198-4066-8a2f-01e683bbd224",
				title: "Pending Vendor Payments",
				created_at: generateRandomDate()
			},
			{
				id: "b6e591c2-e83a-449b-a2a1-e961bb1159ee",
				title: "Overdue Invoices Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "c8a5899b-d581-45f5-bc1a-ed4f3c19a9f5",
				title: "AP Aging Report Review",
				created_at: generateRandomDate()
			},
			{
				id: "bf3c2489-bfd4-4536-a8b2-43a5c5aa83f9",
				title: "AP Turnover Ratio Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "ec8f579d-d3cf-4a76-91d9-58dbbb8d5fcb",
				title: "Managing Vendor Payment Terms",
				created_at: generateRandomDate()
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
