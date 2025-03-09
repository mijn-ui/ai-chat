"use client";

import { useEffect, useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import { Button } from "@mijn-ui/react-button";
import { Textarea, TextareaProps } from "@mijn-ui/react-textarea";
import { cn } from "@mijn-ui/react-theme";

// type ChatInputProps = {
// 	handleSubmit: ...
// 	input: string,
// 	setInput: (value: string) => void,
// }

const ChatInput = ({ className, ...props }: TextareaProps) => {
	// These states should be handled by a parent component
	// I'm just going to leave it for now as we are in a MVP Stage.
	const [input, setInput] = useState("");
	// const [isLoading, setIsLoading] = useState(false);

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [localStorageInput, setLocalStorageInput] = useLocalStorage(
		"input",
		""
	);
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		if (textareaRef.current) {
			adjustHeight();
		}
	}, []);

	const adjustHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
		}
	};

	const resetHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = "98px";
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			const domValue = textareaRef.current.value;
			// Prefer DOM value over localStorage to handle hydration
			const finalValue = domValue || localStorageInput || "";
			setInput(finalValue);
			adjustHeight();
		}
	}, []);

	useEffect(() => {
		setLocalStorageInput(input);
	}, [input, setLocalStorageInput]);

	const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(event.target.value);
		adjustHeight();
	};

	const submitForm = () => {
		// handleSubmit();
		if (!input) return;

		toast.message("Form Submitted", {
			description: `Message: ${input}`
		});

		setInput("");
		setLocalStorageInput("");
		resetHeight();

		if (windowWidth && windowWidth > 768) {
			textareaRef.current?.focus();
		}
	};

	return (
		<div className="relative w-full max-w-screen-md">
			<Textarea
				ref={textareaRef}
				value={input}
				onChange={handleInput}
				className={cn(
					"custom_scroll_bar custom_scroll_bar_light max-h-[calc(75dvh)] min-h-[24px] resize-none overflow-y-auto overflow-x-hidden rounded-2xl bg-default pb-10",
					className
				)}
				rows={2}
				autoFocus
				placeholder="Sent A Message"
				onKeyDown={(event) => {
					if (event.key === "Enter" && !event.shiftKey) {
						event.preventDefault();
						submitForm();
					}
				}}
				{...props}
			/>
			<Button
				iconOnly
				className="absolute bottom-2 right-2 bg-background"
				onClick={(event) => {
					event.preventDefault();
					submitForm();
				}}
				radius="full"
				size="sm"
				disabled={input.length === 0}>
				<LuSend />
			</Button>
		</div>
	);
};

export default ChatInput;
