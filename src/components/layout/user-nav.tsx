"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { LuFlag, LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react-avatar";
import { Button } from "@mijn-ui/react-button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@mijn-ui/react-dropdown-menu";

export function UserNav() {
	const { data: session } = useSession();

	if (session) {
		return (
			<DropdownMenu
				classNames={{
					subTriggerIcon: "hidden"
				}}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="relative size-8 rounded-full ring-offset-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
						<Avatar size="sm" radius="full" className="overflow-hidden">
							<AvatarImage
								src={session.user?.image ?? ""}
								alt={session.user?.name ?? ""}
							/>
							<AvatarFallback className="bg-orange-500">
								{session.user?.name?.[0]}
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">
								{session.user?.name}
							</p>
							<p className="text-xs leading-none text-muted-foreground">
								{session.user?.email}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="justify-between">
						Update Profile
						<LuUser />
					</DropdownMenuItem>
					<DropdownMenuItem className="justify-between">
						Report A Bug
						<LuFlag />
					</DropdownMenuItem>
					<DropdownMenuItem className="justify-between">
						Settings
						<LuSettings />
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className="flex items-center justify-between text-red-400 focus:bg-danger/20 focus:text-red-400"
						onClick={() => signOut()}>
						Sign Out
						<LuLogOut />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<Button size="sm" color="secondary" asChild>
			<Link href={"/signin"}>Sign In</Link>
		</Button>
	);
}
