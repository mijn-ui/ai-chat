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
import { ERPCategories, ERPChat } from "@/types";

export const fakeERPCategories: ERPCategories[] = sortByDate([
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
				created_at: generateRandomDate()
			},
			{
				id: "c5f33253-e98d-497f-8b64-cf7081b077cc",
				title: "Equity and Retained Earnings",
				created_at: generateRandomDate()
			},
			{
				id: "82ffd2af-998a-408d-bb5d-d18679c3b026",
				title: "Monthly Balance Sheet Report",
				created_at: generateRandomDate()
			},
			{
				id: "a5d2e762-3bb1-4f89-9f85-08b8a4b5a8b7",
				title: "Balance Sheet Ratio Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "9e3c10d5-ff76-4d95-bb3d-bb5a0f7efc58",
				title: "Current vs. Non-Current Assets",
				created_at: generateRandomDate()
			},
			{
				id: "6bfacbc2-3f62-486b-8f4b-57e1d5f8e123",
				title: "Depreciation and Amortization Review",
				created_at: generateRandomDate()
			},
			{
				id: "1ea3fc5e-b28d-4694-a7eb-b8295a5c3e1d",
				title: "Balance Sheet Adjustments",
				created_at: generateRandomDate()
			},
			{
				id: "e128a7bd-3c54-4b3e-8267-295ce2a647b5",
				title: "Quarterly Financial Position",
				created_at: generateRandomDate()
			},
			{
				id: "df4f2ef4-6e73-4a48-8b3c-b29f8ad77ef4",
				title: "Comparative Balance Sheet Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "b43cd8d6-9a1d-4902-bd2a-12f6d22d5bb3",
				title: "Impact of Leverage on Balance Sheet",
				created_at: generateRandomDate()
			},
			{
				id: "c0e1a3b9-3c82-4c1f-88f1-179c846bb9c6",
				title: "Goodwill and Intangible Assets",
				created_at: generateRandomDate()
			},
			{
				id: "ea2d2f4a-15c2-4c95-9d35-4f546e75976f",
				title: "Financial Health Indicators",
				created_at: generateRandomDate()
			},
			{
				id: "c9ebd92f-32d4-4952-b82a-b35e9e567eb3",
				title: "Deferred Tax Liabilities",
				created_at: generateRandomDate()
			},
			{
				id: "83b7a7d9-4e4b-4e7a-a4f5-57336bdb647c",
				title: "Liquidity Ratios and Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "f2a5e0e9-b3a3-4e79-b073-3d8b0cb09d6a",
				title: "Net Worth Calculation",
				created_at: generateRandomDate()
			},
			{
				id: "94c3c9a5-6421-4f49-bfc8-12b7fd08e8c5",
				title: "Balance Sheet Trends Over Time",
				created_at: generateRandomDate()
			},
			{
				id: "d3f89ad3-235a-4df0-9f99-1b35f68c4e5d",
				title: "Fixed vs. Variable Liabilities",
				created_at: generateRandomDate()
			},
			{
				id: "ae8a54e9-d5e6-49f1-8435-47cf324bc2e3",
				title: "Accounting Policy Changes Impact",
				created_at: generateRandomDate()
			},
			{
				id: "f4b1a649-df59-4b1d-8fbf-5a6c2f81e9c3",
				title: "External Audit Findings",
				created_at: generateRandomDate()
			},
			{
				id: "f98e5d49-2c44-4b1b-a3b4-2f92d1f9e7a3",
				title: "Shareholder Equity Analysis",
				created_at: generateRandomDate()
			},
			{
				id: "b34a8f5e-2c9d-4bfb-a789-58e94d5dfc72",
				title: "Working Capital Management",
				created_at: generateRandomDate()
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
export function sortByDate(categories: ERPCategories[]): ERPCategories[] {
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
