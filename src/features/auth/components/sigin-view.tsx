import { Metadata } from "next";
import UserAuthForm from "./user-auth-form";
import Logo from "@/components/layout/logo";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components."
};

export default function SignInViewPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<header className="absolute left-6 top-6 flex items-center gap-1">
				<Logo />
			</header>
			<main className="flex w-full max-w-md flex-col gap-3 rounded-large border bg-card p-4 shadow-sm">
				<h3 className="text-lg font-semibold">Create An Account</h3>
				<UserAuthForm />
			</main>
		</div>
	);
}
