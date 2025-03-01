import { SUGGESTION_ITEMS } from "../constants";
import ChatInput from "./chat-input";
import ChatRecommandation from "./chat-recommandation";
import { Card } from "@mijn-ui/react-card";
import { ERPChat } from "@/types";

type ChatViewPageProps = {
	chat?: ERPChat;
};

const ChatViewPage = ({ chat }: ChatViewPageProps) => {
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="flex w-full max-w-screen-md items-center justify-end p-4">
					{chat ? (
						<Card className="w-fit rounded-3xl bg-default px-4 py-3 text-sm">
							{chat.title}
						</Card>
					) : (
						<div className="absolute inset-x-0 top-[calc(50%-52px)] flex -translate-y-1/2 flex-col items-center justify-center gap-6">
							<ChatRecommandation suggestionItems={SUGGESTION_ITEMS} />
						</div>
					)}
				</div>
			</div>

			<div className="absolute bottom-8 z-30 flex w-full items-center justify-center px-4">
				<ChatInput />
			</div>
		</>
	);
};

export default ChatViewPage;
