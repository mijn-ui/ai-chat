"use client";

import Image from "next/image";
import { Card } from "@mijn-ui/react-card";
import { tv } from "@mijn-ui/react-theme";
import Chart from "@/components/chart";
import Markdown from "@/components/markdown";
import {
	AssistantMessageData,
	ChatMessage as ChatMessageType,
	TextContent
} from "@/types";

const ChatMessages = ({ messages }: { messages: ChatMessageType[] }) => (
	<div className="flex flex-col gap-4">
		{messages.map((message) => (
			<ChatMessage key={message.id} message={message} />
		))}
	</div>
);

/* -------------------------------------------------------------------------- */

const messageStyles = tv({
	base: "group flex w-full items-center",
	slots: {
		message: "relative text-medium"
	},
	variants: {
		role: {
			user: {
				base: "justify-end",
				message: "w-fit rounded-3xl bg-default px-4 py-3 sm:max-w-md"
			},
			assistant: {
				base: "justify-start",
				message: "w-full bg-transparent shadow-none"
			}
		}
	}
});

const ChatMessage = ({ message }: { message: ChatMessageType }) => {
	const { base, message: messageClass } = messageStyles({
		role: message.role
	});

	return (
		<div className={base()} key={message.id}>
			{message.role === "assistant" ? (
				<AssistantMessage messageData={message.data} />
			) : (
				<UserMessage messageData={message.data} messageClass={messageClass()} />
			)}
		</div>
	);
};

const AssistantMessage = ({
	messageData
}: {
	messageData: AssistantMessageData[];
}) => (
	<div className="flex items-start gap-2">
		<div className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background">
			<Image
				className="[filter:_grayscale(100%)_contrast(1000%)_brightness(0%)] dark:[filter:_invert(100%)_brightness(1000%)]"
				src="/picosbs.png"
				width={20}
				height={20}
				alt="Assistant"
			/>
		</div>{" "}
		<div>
			{messageData.map((data, index) => (
				<MessageDataRenderer key={index} data={data} />
			))}
		</div>
	</div>
);

const MessageDataRenderer = ({ data }: { data: AssistantMessageData }) => {
	if (data.type === "text") {
		return <Markdown>{data.content}</Markdown>;
	} else if (
		data.type === "tool-invocation" &&
		(data.toolName === "pie-chart" ||
			data.toolName === "bar-chart" ||
			data.toolName === "line-chart")
	) {
		return <Chart {...data} />;
	}

	return null;
};

const UserMessage = ({
	messageData,
	messageClass
}: {
	messageData: TextContent[];
	messageClass: string;
}) => (
	<>
		{messageData.map((data, index) => (
			<Card className={messageClass} key={index}>
				{data.content}
			</Card>
		))}
	</>
);

export default ChatMessages;
