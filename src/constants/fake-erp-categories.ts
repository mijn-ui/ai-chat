import { ERPCategories, ERPChat } from "@/types";
import { faker } from "@faker-js/faker";
import {
	format,
	isThisMonth,
	isThisWeek,
	isToday,
	isYesterday,
	parseISO
} from "date-fns";

const generateRandomDate = () => {
	const now = new Date();

	const daysAgo = faker.number.int({ min: 1, max: 7 });
	const date = new Date(now);
	date.setDate(now.getDate() - daysAgo);

	return date.toISOString();
};

export const fakeERPCategories: ERPCategories[] = [
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
				id: "1082a76c-7e35-4277-8e3b-1408477cdf98",
				title: "Annual Balance Sheet Review",
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
			},
			{
				id: "1a20794c-edab-49c3-a994-bfaf33cd7cb4",
				title: "Net Income Calculation",
				created_at: generateRandomDate()
			},
			{
				id: "967467a9-ff7e-489c-8265-9549e2e3a60d",
				title: "Comparing Profitability Over Time",
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
				id: "77c6947b-af99-42fa-856a-3a52caf0f2c3",
				title: "Financing Cash Flow Breakdown",
				created_at: generateRandomDate()
			},
			{
				id: "ee4f206f-f36d-4b24-b02f-1932efd5e4e7",
				title: "Net Cash Flow Predictions",
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
				id: "fddbec1d-0a46-48b4-8bc0-637005245aaa",
				title: "Early Payment Discounts",
				created_at: generateRandomDate()
			},
			{
				id: "c8a5899b-d581-45f5-bc1a-ed4f3c19a9f5",
				title: "AP Aging Report Review",
				created_at: generateRandomDate()
			}
		]
	},
	{
		id: "ca44c4e2-da64-41d5-8948-ecbe24cb2fb0",
		title: "Accounts Receivable Status",
		url: "account-receivable-status",
		icon: "hand-coins",
		created_at: generateRandomDate(),
		chats: [
			{
				id: "23e5ae38-a360-44f8-825c-ad7724973f1b",
				title: "Outstanding Customer Invoices",
				created_at: generateRandomDate()
			},
			{
				id: "d6662f2b-45c0-4d4f-99e9-71142ae7d273",
				title: "Credit Risk Assessment",
				created_at: generateRandomDate()
			},
			{
				id: "3dc1d3ad-765b-40d0-87e1-c648d2c534a2",
				title: "Customer Payment Trends",
				created_at: generateRandomDate()
			},
			{
				id: "afb7e959-2f04-45bf-a14a-6d2f912ef984",
				title: "AR Aging Report Insights",
				created_at: generateRandomDate()
			}
		]
	}
];

/* ---------------------------------- Utils --------------------------------- */

type GroupedChats = {
	title: string;
	group: ERPChat[];
};

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
