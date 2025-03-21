import type { IconType } from "react-icons/lib";
import {
	LuCode,
	LuCreditCard,
	LuDatabase,
	LuFileSpreadsheet,
	LuHandCoins,
	LuMail,
	LuRefreshCw,
	LuTrendingUp
} from "react-icons/lu";
import { CategoryIconType } from "@/types";

export const IconMap: Record<CategoryIconType, IconType> = {
	"spread-sheet": LuFileSpreadsheet,
	"trending-up": LuTrendingUp,
	exchange: LuRefreshCw,
	"credit-card": LuCreditCard,
	"hand-coins": LuHandCoins,
	database: LuDatabase,
	mail: LuMail,
	code: LuCode
} as const;
