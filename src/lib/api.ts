import { notFound } from "next/navigation";
import { ERPCategory, ERPChat } from "@/types";

export async function fetchCategoryData(
	id: string,
	chatId: string
): Promise<ERPChat>;
export async function fetchCategoryData(id: string): Promise<ERPCategory>;
export async function fetchCategoryData(): Promise<ERPCategory[]>;
export async function fetchCategoryData(
	id?: string,
	chatId?: string
): Promise<ERPCategory | ERPChat | ERPCategory[]> {
	const url =
		id && chatId
			? `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}?chatId=${chatId}`
			: id
				? `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}`
				: `${process.env.NEXT_PUBLIC_API_URL}/api/categories`;

	const res = await fetch(url, { cache: "force-cache" });
	const data = await res.json();
	if (!data) notFound();

	return data;
}
