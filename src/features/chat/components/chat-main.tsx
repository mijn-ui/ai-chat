import { Button } from "@mijn-ui/react-button";
import { Input } from "@mijn-ui/react-input";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiMiniSparkles } from "react-icons/hi2";
import {
	LuBox,
	LuCreditCard,
	LuFileSpreadsheet,
	LuHandCoins,
	LuPanelLeft,
	LuSearch,
	LuSend,
	LuTrendingUp
} from "react-icons/lu";
import { MdCurrencyExchange, MdOutlineTrackChanges } from "react-icons/md";
import { PiPaperPlane, PiPaperPlaneTilt } from "react-icons/pi";

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
			<div className="flex flex-col items-center justify-center gap-6 pt-60">
				<GeneralRecommandation />
			</div>
			<div className="absolute bottom-8 z-50 flex w-full items-center justify-center">
				<Input
					classNames={{
						wrapper: "max-w-screen-md",
						base: "bg-default pr-12",
						endIcon: "right-0 group/end-icon"
					}}
					startIcon={<LuSearch />}
					placeholder="Some text for an ai..."
					endIcon={
						<Button variant="ghost">
							<LuSend
								className="text-muted-foreground group-hover/end-icon:text-foreground"
								size={16}
							/>
						</Button>
					}
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

			<div className="flex max-w-screen-sm flex-wrap items-center justify-center gap-4">
				<Button radius="full" className="gap-2">
					<LuFileSpreadsheet className="text-blue-600 dark:text-blue-400" />
					Balance Sheet
				</Button>
				<Button radius="full" className="gap-2">
					<LuTrendingUp className="text-green-600 dark:text-green-400" />
					Income Statement
				</Button>
				<Button radius="full" className="gap-2">
					<MdCurrencyExchange className="text-purple-600 dark:text-purple-400" />
					Cash Flow
				</Button>
				<Button radius="full" className="gap-2">
					<MdOutlineTrackChanges className="text-yellow-600 dark:text-yellow-400" />
					Equity Changes
				</Button>
				<Button radius="full" className="gap-2">
					<LuBox className="text-yellow-600 dark:text-yellow-400" />
					Inventory
				</Button>
				<Button radius="full" className="gap-2">
					<HiOutlineDocumentReport className="text-blue-600 dark:text-blue-400" />
					Sales Report
				</Button>
				<Button radius="full" className="gap-2">
					<LuHandCoins className="text-green-600 dark:text-green-400" />
					Receivables
				</Button>
				<Button radius="full" className="gap-2">
					<LuCreditCard className="text-red-600 dark:text-red-400" />
					Payables
				</Button>
			</div>
		</>
	);
};

export default ChatMain;
