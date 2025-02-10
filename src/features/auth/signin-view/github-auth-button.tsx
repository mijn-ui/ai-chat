"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@mijn-ui/react-button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function GithubSignInButton() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");

	return (
		<Button
			className="w-full"
			color="default"
			type="button"
			onClick={() =>
				signIn("github", { callbackUrl: callbackUrl ?? "/dashboard" })
			}>
			<FaGithub className="mr-2 size-4" />
			Continue with Github
		</Button>
	);
}
