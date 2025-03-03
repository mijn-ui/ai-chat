import Image from "next/image";
import { LuSparkles } from "react-icons/lu";
import { Card } from "@mijn-ui/react-card";
import { tv } from "@mijn-ui/react-theme";
import Markdown from "@/components/markdown";
import { ChatMessage as ChatMessageType } from "@/types";

type ChatMessagesProps = {
	messages: ChatMessageType[];
};

const ChatMessages = ({ messages }: ChatMessagesProps) => {
	return (
		<div className="flex flex-col gap-4">
			{messages.map((message) => (
				<ChatMessage key={message.id} message={message} />
			))}
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                 ChatMessage                                */
/* -------------------------------------------------------------------------- */

const chatMessageStyles = tv({
	base: "group flex w-full items-center",
	slots: {
		message: "relative text-medium "
	},
	variants: {
		role: {
			user: {
				base: "justify-end",
				message: "w-fit rounded-3xl bg-default px-4 py-3"
			},
			assistant: {
				base: "justify-start",
				message: "w-full bg-transparent shadow-none"
			}
		}
	}
});

const ChatMessage = ({ message }: { message: ChatMessageType }) => {
	const { base, message: messageClasses } = chatMessageStyles({
		role: message.role
	});

	return (
		<div className={base()} key={message.id}>
			{message.data.map((data, index) => (
				<Card key={index} className={messageClasses()}>
					{message.role === "assistant" ? (
						<AssistantMessage content={data.content} />
					) : (
						<UserMessage content={data.content} />
					)}
				</Card>
			))}
		</div>
	);
};

const AssistantMessage = ({ content }: { content: string }) => (
	<div className="flex items-start gap-2">
		<div className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background">
			<Image
				className="[filter:_grayscale(100%)_contrast(1000%)_brightness(0%)] dark:[filter:_invert(100%)_brightness(1000%)]"
				src={"/picosbs.png"}
				width={20}
				height={20}
				alt="Assistant"
			/>
		</div>
		<div>
			<Markdown>{content}</Markdown>
		</div>
	</div>
);

const UserMessage = ({ content }: { content: string }) => <>{content}</>;

export default ChatMessages;
