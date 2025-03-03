import animationPlugin from "tailwindcss-animate";
import { mijnui } from "@mijn-ui/react-theme";
import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@mijn-ui/react-theme/dist/**/*.js"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				sidebar: {
					DEFAULT: "hsl(var(--mijnui-sidebar-background))",
					foreground: "hsl(var(--mijnui-sidebar-foreground))",
					primary: "hsl(var(--mijnui-sidebar-primary))",
					"primary-foreground": "hsl(var(--mijnui-sidebar-primary-foreground))",
					accent: "hsl(var(--mijnui-sidebar-accent))",
					"accent-foreground": "hsl(var(--mijnui-sidebar-accent-foreground))",
					border: "hsl(var(--mijnui-sidebar-border))",
					ring: "hsl(var(--mijnui-sidebar-ring))"
				}
			},
			screens: {
				xs: "380px"
			}
		}
	},
	plugins: [animationPlugin, typographyPlugin, mijnui({})]
};
