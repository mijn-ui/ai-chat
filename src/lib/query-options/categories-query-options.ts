import { ERPCategories } from "../../types";
import { queryOptions } from "@tanstack/react-query";

export function categoriesQueryOptions() {
	return queryOptions({
		queryKey: ["categories"],
		queryFn: getCategories
	});
}

const getCategories = async (): Promise<ERPCategories[]> => {
	const res = await fetch("/api/categories");
	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	return res.json();
};

/* -------------------------------------------------------------------------- */

export function categoryQueryOptions(
	categoryId: string,
	enabled: boolean = true
) {
	return queryOptions({
		queryKey: ["chats", categoryId],
		queryFn: () => getChats(categoryId),
		enabled
	});
}

const getChats = async (id: string): Promise<ERPCategories> => {
	const res = await fetch(`/api/categories/${id}`);
	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	return res.json();
};
