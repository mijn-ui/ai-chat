/**
 * Icon types for category visualization
 */
export type CategoryIconType =
	| "spread-sheet"
	| "trending-up"
	| "exchange"
	| "credit-card"
	| "hand-coins"
	| "database"
	| "mail"
	| "code";

/**
 * Chart configuration types
 */
export type BaseChartConfig = {
	title: string;
	description: string;
};

export type BarChartConfig = BaseChartConfig & {
	toolName: "bar-chart";
	xAxisDataKey: string;
	content: Record<string, unknown>[];
};

export type LineChartConfig = BaseChartConfig & {
	toolName: "line-chart";
	xAxisDataKey: string;
	content: Record<string, unknown>[];
};

export type PieChartConfig = BaseChartConfig & {
	toolName: "pie-chart";
	content: Record<string, unknown>[];
};

export type ChartConfig = BarChartConfig | LineChartConfig | PieChartConfig;

/**
 * Message data types
 */
export type TextContent = {
	type: "text";
	content: string;
};

export type ChartContent = {
	type: "tool-invocation";
} & ChartConfig;

/**
 * User can only send text messages
 */
export type UserMessageData = TextContent;

/**
 * Assistant can send text or chart messages
 */
export type AssistantMessageData = TextContent | ChartContent;

/**
 * Message types based on sender role
 */
export type UserMessage = {
	role: "user";
	id: string;
	data: UserMessageData[];
};

export type AssistantMessage = {
	role: "assistant";
	id: string;
	data: AssistantMessageData[];
};

export type ChatMessage = UserMessage | AssistantMessage;

/**
 * ERP data structures
 */
export type ERPChat = {
	id: string;
	title: string;
	created_at: string;
	messages?: ChatMessage[];
};

export type ERPCategory = {
	id: string;
	title: string;
	url: string;
	icon: CategoryIconType;
	created_at: string;
	chats: ERPChat[];
};
