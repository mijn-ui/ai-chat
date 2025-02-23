"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@mijn-ui/react-button";

export default function GithubSignInButton() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");

	return (
		<Button
			className="w-full"
			color="default"
			type="button"
			onClick={() => signIn("github", { callbackUrl: callbackUrl ?? "/" })}>
			<FaGithub className="mr-2 size-4" />
			Continue with Github
		</Button>
	);
}
