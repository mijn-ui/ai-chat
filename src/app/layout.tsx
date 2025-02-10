import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { auth } from "@/lib/auth";
import { cn } from "@mijn-ui/react-theme";
import Providers from "../components/layout/provider";

const inter = Inter({ subsets: ["latin"], fallback: ["sans serif"] });

export const metadata: Metadata = {
	title: "PicoSbs",
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
			<body className={cn(inter.className, "antialiased")}>
				<Providers session={session}>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
