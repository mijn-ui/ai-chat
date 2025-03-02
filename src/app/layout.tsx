import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "../components/layout/provider";
import { cn } from "@mijn-ui/react-theme";
import { auth } from "@/lib/auth";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

export const metadata: Metadata = {
	title: "Pico Chat",
	description: "Retrieval-Augmented Generation(RAG) ChatBot"
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	const session = await auth();

	return (
		<html suppressHydrationWarning lang="en">
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<body
				className={cn(geistSans.variable, geistMono.variable, "antialiased")}>
				<Providers session={session}>
					<Toaster />
					{children}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
