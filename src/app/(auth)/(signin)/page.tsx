import { Metadata } from "next";
import SignInViewPage from "@/features/auth/signin-view/sigin-view";

export const metadata: Metadata = {
	title: "Picosbs | Sign In",
	description: "Sign In page for authentication."
};

export default function Page() {
	return <SignInViewPage />;
}
