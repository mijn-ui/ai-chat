import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ERPCategory } from "@/types";

// These are the routes that you wouldn't want to fetch categories for.
const DEFAULT_ROUTES = ["", "/upload", "/code"];

export const useCategory = (categoryId: string) => {
	const pathname = usePathname();

	const isDefaultUrl = DEFAULT_ROUTES.some((item) => item === pathname);

	const isFetchableUrl = !isDefaultUrl && !!pathname;

	return useQuery({
		queryKey: ["chats", categoryId],
		queryFn: () => getChats(categoryId),
		meta: {
			errorMessage: "Failed to fetch categories chats."
		},
		enabled: isFetchableUrl
	});
};

const getChats = async (id: string): Promise<ERPCategory> => {
	const res = await fetch(`/api/categories/${id}`);
	if (!res.ok) {
		throw new Error("Network response was not ok");
	}

	return res.json();
};
