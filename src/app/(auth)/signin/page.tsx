import { Metadata } from "next";
import SignInViewPage from "@/features/auth/components/sigin-view";

export const metadata: Metadata = {
	title: "Pico Chat | Sign In",
	description: "Sign In page for authentication."
};

export default function Page() {
	return <SignInViewPage />;
}
