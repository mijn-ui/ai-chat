"use client";

import SyntaxHighlighter, {
	type SyntaxHighlighterProps
} from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeBlock({
	node,
	inline,
	className,
	children,
	...props
}: SyntaxHighlighterProps) {
	const match = /language-(\w+)/.exec(className || "");

	return !inline && match ? (
		<SyntaxHighlighter
			style={a11yDark}
			PreTag="div"
			customStyle={{
				borderRadius: "0.75rem",
				fontSize: "0.75rem"
			}}
			language={match[1]}
			{...props}>
			{String(children).replace(/\n$/, "")}
		</SyntaxHighlighter>
	) : (
		<code
			className={`${className} rounded-xl bg-[rgb(43,_43,_43)] px-1 py-0.5 text-sm`}
			{...props}>
			{children}
		</code>
	);
}
