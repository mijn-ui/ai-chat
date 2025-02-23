import { formatDistanceToNow, parseISO } from "date-fns";

export function formatBytes(
	bytes: number,
	opts: {
		decimals?: number;
		sizeType?: "accurate" | "normal";
	} = {}
) {
	const { decimals = 0, sizeType = "normal" } = opts;

	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
	if (bytes === 0) return "0 Byte";
	const i = Math.floor(Math.log(bytes) / Math.log(1024));

	return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
		sizeType === "accurate"
			? (accurateSizes[i] ?? "Bytest")
			: (sizes[i] ?? "Bytes")
	}`;
}

/* -------------------------------------------------------------------------- */

export function formatDateFromNow(dateString: string): string {
	const date = parseISO(dateString);

	return formatDistanceToNow(date, { addSuffix: true });
}

/* -------------------------------------------------------------------------- */

/**
 * Utility function to retrieve a specific segment of a given path.
 *
 * @param path - The path string to extract the segment from.
 * @param segmentIndex - The index of the segment to retrieve. Defaults to 0.
 * @returns The segment at the specified index, or null if the index is out of bounds.
 *
 * @example
 * // Assuming the path is '/home/user/profile'
 * const segment = getPathSegment('/home/user/profile', 1); // Returns 'user'
 */
export const getPathSegment = (
	path: string,
	segmentIndex: number = 0
): string | null => {
	const segments = path.split("/").filter(Boolean);

	return segments[segmentIndex] || null;
};

/* -------------------------------------------------------------------------- */

/**
 * Converts a given string to kebab-case.
 *
 * Kebab-case is a string format where words are separated by hyphens (`-`)
 * and all letters are in lowercase.
 *
 * @param str - The input string to be converted.
 * @returns The kebab-case formatted string.
 *
 * @example
 * ```typescript
 * toKebabCase("helloWorld"); // "hello-world"
 * toKebabCase("Hello World"); // "hello-world"
 * toKebabCase("some_variable_name"); // "some-variable-name"
 * ```
 */
export function toKebabCase(str: string): string {
	if (!str) return "";

	return str
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();
}

/* -------------------------------------------------------------------------- */

/**
 * Converts a given string from kebab-case, camelCase, or snake_case to a capitalized space-separated format.
 *
 * @param str - The input string to be converted.
 * @returns The capitalized space-separated formatted string.
 *
 * @example
 * ```typescript
 * toCapitalizedWords("hello-world"); // "Hello World"
 * toCapitalizedWords("helloWorld"); // "Hello World"
 * toCapitalizedWords("hello_world"); // "Hello World"
 * ```
 */
export function toCapitalizedWords(str: string): string {
	if (!str) return "";

	return str
		.replace(/[-_]/g, " ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/\b\w/g, (char) => char.toUpperCase());
}
