export default {
	arrowParens: "always",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	bracketSameLine: true,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	requirePragma: false,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "none",
	useTabs: true,
	endOfLine: "auto",
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss"
	],
	importOrder: [
		"^react$",
		"^next(/.*)?$",
		"next-themes",
		"@mijn-ui/*",
		"@/*",
		"<THIRD_PARTY_MODULES>"
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true
};
