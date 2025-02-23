import { usePathname } from "next/navigation";
import { getPathSegment } from "@/lib/utils";

/**
 * Custom hook to retrieve a specific segment of the current pathname.
 *
 * @param segmentIndex - The index of the segment to retrieve. Defaults to 0.
 * @returns {string} - The segment of the pathname at the specified index, or an empty string if the segment does not exist.
 *
 * @example
 * // Assuming the current pathname is '/home/user/profile'
 * const segment = useActivePathSegment(1); // Returns 'user'
 */
export const useActivePathSegment = (segmentIndex: number = 0): string => {
	const pathname = usePathname();

	return getPathSegment(pathname, segmentIndex) || "";
};
