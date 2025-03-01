import { SuggestionItem } from "../constants";
import { HiSparkles } from "react-icons/hi";
import { Button } from "@mijn-ui/react-button";

type ChatRecommandationProps = {
	suggestionItems: SuggestionItem[];
};

const ChatRecommandation = ({ suggestionItems }: ChatRecommandationProps) => (
	<div className="flex flex-col gap-6 px-4">
		<div className="flex flex-col items-start justify-center gap-2 md:items-center">
			<h3 className="flex items-center gap-2 text-lg font-semibold">
				<HiSparkles size={20} />
				Let&apos;s get you started
			</h3>
			<p className="text-small text-muted-foreground">
				Type a question or choose one of these examples.
			</p>
			<Button size="sm" color="primary" className="gap-2">
				<HiSparkles />
				What Can I ask?
			</Button>
		</div>
		<div className="flex max-w-screen-sm flex-wrap items-center justify-start gap-4 md:justify-center">
			{suggestionItems.map((item) => (
				<Button key={item.id} size="sm" radius="full">
					{item.icon}
					{item.text}
				</Button>
			))}
		</div>
	</div>
);

export default ChatRecommandation;
