"use client";

import React from "react";
import { ThemeProvider } from "./theme-toggle/theme-provider";
import { SessionProvider, type SessionProviderProps } from "next-auth/react";

export default function Providers({
	session,
	children
}: {
	session: SessionProviderProps["session"];
	children: React.ReactNode;
}) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange>
				<SessionProvider session={session}>{children}</SessionProvider>
			</ThemeProvider>
		</>
	);
}
