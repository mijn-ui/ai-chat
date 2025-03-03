import { SUGGESTION_ITEMS } from "../constants";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";
import ChatRecommandation from "./chat-recommandation";
import { ERPChat } from "@/types";

type ChatViewPageProps = {
	chat?: ERPChat;
};

const ChatViewPage = ({ chat }: ChatViewPageProps) => {
	return (
		<>
			<div className="flex h-full items-center justify-center">
				<div className="flex size-full max-w-screen-md items-center px-4 pb-40 pt-20">
					{chat && chat.messages ? (
						<ChatMessages messages={chat.messages} />
					) : (
						<div className="absolute inset-x-0 top-[calc(50%-52px)] flex -translate-y-1/2 flex-col items-center justify-center gap-6">
							<ChatRecommandation suggestionItems={SUGGESTION_ITEMS} />
						</div>
					)}
				</div>
			</div>

			<div className="absolute bottom-0 z-30 flex w-full items-center justify-center bg-card px-4 pb-8">
				<ChatInput />
			</div>
		</>
	);
};

export default ChatViewPage;
