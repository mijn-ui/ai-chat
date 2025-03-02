import { getPathSegment } from "./utils";
import { fakeERPCategories } from "@/constants/fake-erp-categories";
import { ERPCategory } from "@/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchCategories(): Promise<ERPCategory[]> {
	await delay(250);

	return fakeERPCategories;
}

export async function fetchCategory(id: string) {
	await delay(250);

	const category = fakeERPCategories.find(
		(category) => category.id === id || getPathSegment(category.url) === id
	);

	// Mock current time
	const currentTime = new Date().toISOString();

	if (!category) {
		return {
			success: false,
			message: `Category with ID or URL: ${id} doesn't exist.`
		};
	}

	return {
		success: true,
		time: currentTime,
		message: `Category with ID or URL: ${id} found`,
		category
	};
}

export async function fetchChat(id: string, chatId: string) {
	await delay(250);

	const category = fakeERPCategories.find(
		(category) => category.id === id || getPathSegment(category.url) === id
	);

	// Mock current time
	const currentTime = new Date().toISOString();

	if (!category) {
		return {
			success: false,
			message: `Category with ID or URL: ${id} doesn't exist.`
		};
	}

	const chat = category.chats.find((chat) => chat.id === chatId);

	if (!chat) {
		return {
			success: false,
			message: `Category with chatId: ${chatId} doesn't exist.`
		};
	}

	return {
		success: true,
		time: currentTime,
		message: `Category with chatId: ${id} found`,
		chat
	};
}
