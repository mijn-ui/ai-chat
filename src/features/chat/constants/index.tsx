import { HiOutlineDocumentReport } from "react-icons/hi";
import {
	LuBox,
	LuCreditCard,
	LuFileSpreadsheet,
	LuHandCoins,
	LuTrendingUp
} from "react-icons/lu";
import { MdCurrencyExchange, MdOutlineTrackChanges } from "react-icons/md";

export type SuggestionItem = {
	id: string;
	icon: React.ReactNode;
	text: string;
};

export const SUGGESTION_ITEMS: SuggestionItem[] = [
	{
		id: "balance-sheet",
		icon: <LuFileSpreadsheet className="text-blue-600 dark:text-blue-400" />,
		text: "Balance Sheet"
	},
	{
		id: "income-statement",
		icon: <LuTrendingUp className="text-green-600 dark:text-green-400" />,
		text: "Income Statement"
	},
	{
		id: "cash-flow",
		icon: (
			<MdCurrencyExchange className="text-purple-600 dark:text-purple-400" />
		),
		text: "Cash Flow"
	},
	{
		id: "equity-changes",
		icon: (
			<MdOutlineTrackChanges className="text-yellow-600 dark:text-yellow-400" />
		),
		text: "Equity Changes"
	},
	{
		id: "inventory",
		icon: <LuBox className="text-yellow-600 dark:text-yellow-400" />,
		text: "Inventory"
	},
	{
		id: "sales-report",
		icon: (
			<HiOutlineDocumentReport className="text-blue-600 dark:text-blue-400" />
		),
		text: "Sales Report"
	},
	{
		id: "receivables",
		icon: <LuHandCoins className="text-green-600 dark:text-green-400" />,
		text: "Receivables"
	},
	{
		id: "payables",
		icon: <LuCreditCard className="text-red-600 dark:text-red-400" />,
		text: "Payables"
	}
];
