// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware
import authConfig from "@/lib/auth.config";
import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	publicRoutes
} from "@/route";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;

	const isLoggedIn = !!req.auth;
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return undefined;
	}

	if (isLoggedIn && isAuthRoute) {
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
	}

	if (!isLoggedIn && isPublicRoute) {
		return Response.redirect(new URL("/signin", nextUrl));
	}

	return undefined;
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)"
	]
};
