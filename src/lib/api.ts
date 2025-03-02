import { notFound } from "next/navigation";
import { ERPCategory, ERPChat } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
	throw new Error("NEXT_PUBLIC_API_URL is not set.");
}

export async function fetchCategories(): Promise<ERPCategory[]> {
	const res = await fetch(`${API_BASE_URL}/api/categories`, {
		cache: "force-cache"
	});
	const data = res.json();

	if (!data) {
		notFound();
	}

	return data;
}

export async function fetchCategory(id: string): Promise<ERPCategory> {
	const res = await fetch(`${API_BASE_URL}/api/categories/${id}`, {
		cache: "force-cache"
	});
	const data = res.json();

	if (!data) {
		notFound();
	}

	return data;
}

export async function fetchChat(id: string, chatId: string): Promise<ERPChat> {
	const res = await fetch(
		`${API_BASE_URL}/api/categories/${id}?chatId=${chatId}`,
		{
			cache: "force-cache"
		}
	);
	const data = await res.json();

	if (!data || typeof data !== "object") {
		notFound();
	}

	return data;
}
