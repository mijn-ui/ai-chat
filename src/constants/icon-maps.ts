import { CATEGORY_ICON_TYPE } from "@/types";
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

export const IconMap: Record<CATEGORY_ICON_TYPE, IconType> = {
	"spread-sheet": LuFileSpreadsheet,
	"trending-up": LuTrendingUp,
	exchange: LuRefreshCw,
	"credit-card": LuCreditCard,
	"hand-coins": LuHandCoins,
	database: LuDatabase,
	mail: LuMail,
	code: LuCode
} as const;
