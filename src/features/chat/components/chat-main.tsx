import { Button } from "@mijn-ui/react-button";
import { Input } from "@mijn-ui/react-input";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { FaPaperPlane } from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";
import { LuPanelLeft, LuSearch } from "react-icons/lu";

const ChatMain = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
	return (
		<ScrollArea className="relative flex size-full flex-col items-center justify-center gap-2">
			<Button
				className="mt-4"
				iconOnly
				variant="outlined"
				onClick={() => setOpen(true)}>
				<LuPanelLeft />
			</Button>
			<div className="flex flex-col items-center justify-center gap-4 pt-44">
				<GeneralRecommandation />
			</div>
			<div className="absolute bottom-4 z-10 flex w-full items-center justify-center">
				<Input
					classNames={{
						wrapper: "max-w-screen-md"
					}}
					startIcon={<LuSearch />}
					placeholder="Some text for an ai..."
					endIcon={<FaPaperPlane />}
				/>
			</div>
		</ScrollArea>
	);
};

const GeneralRecommandation = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="flex items-center gap-2 text-lg font-semibold">
					<HiMiniSparkles size={20} />
					Let&apos;s get you started
				</h3>
				<p className="text-small text-muted-foreground">
					Type question or choose one of these examples.
				</p>
				<Button size="sm" color="primary" className="gap-2">
					<HiMiniSparkles />
					What Can I ask?
				</Button>
			</div>

			<div className="flex flex-col items-center justify-center gap-2">
				<Button
					variant="outlined"
					className="h-auto w-full max-w-screen-sm items-start justify-start gap-2 p-4 text-left text-small text-muted-foreground">
					<HiMiniSparkles className="mt-1 text-primary" size={18} />
					<span className="font-medium">
						How do age group and gender influence the average number of sessions
						per user?
					</span>
				</Button>

				<Button
					variant="outlined"
					className="h-auto w-full max-w-screen-sm items-start justify-start gap-2 p-4 text-left text-small text-muted-foreground">
					<HiMiniSparkles className="mt-1 text-primary" size={18} />
					<span className="font-medium">
						What are the month-on-month return rates for the top 5 product
						categories by revenue over the last year?
					</span>
				</Button>

				<Button
					variant="outlined"
					className="h-auto w-full max-w-screen-sm items-start justify-start gap-2 p-4 text-left text-small text-muted-foreground">
					<HiMiniSparkles className="mt-1 text-primary" size={18} />
					<span className="font-medium">
						What is the return rate for different product categories, and how
						does it impact overall profitability?
					</span>
				</Button>
			</div>
		</>
	);
};

export default ChatMain;
