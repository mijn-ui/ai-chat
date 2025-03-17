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
	plugins: [
		animationPlugin,
		typographyPlugin,
		mijnui({
			themes: {
				light: {
					colors: {
						primary: "217.2 91.2% 59.8%",
						default: "214.3 31.8% 91.4%",
						secondary: {
							DEFAULT: "0 0% 0%",
							foreground: "0 0% 100%"
						},
						border: "0 0% 84%",
						input: "0 0% 84%"
					}
				},
				dark: {
					colors: {
						background: "0 0% 4%",
						primary: "217.2 91.2% 59.8%",
						default: "240 3.7% 15.9%",
						secondary: {
							DEFAULT: "0 0% 100%",
							foreground: "0 0% 0%"
						},
						border: "0 0% 15%",
						input: "0 0% 15%"
					}
				}
			}
		})
	]
};
