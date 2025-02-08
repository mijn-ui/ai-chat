import { mijnui } from "@mijn-ui/react-theme";

import animationPlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@mijn-ui/react-theme/dist/**/*.js"
	],
	darkMode: "class",
	plugins: [animationPlugin, mijnui({})]
};
