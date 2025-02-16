"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react-avatar";
import { Button } from "@mijn-ui/react-button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger
} from "@mijn-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export function UserNav() {
	const { data: session } = useSession();
	if (session) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="relative size-8 rounded-full ring-offset-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
						<Avatar size="sm">
							<AvatarImage
								src={session.user?.image ?? ""}
								alt={session.user?.name ?? ""}
							/>
							<AvatarFallback className="bg-gradient-to-tr from-purple-300 via-primary/50 to-muted text-foreground">
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
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>New Team</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => signOut()}>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}
}
