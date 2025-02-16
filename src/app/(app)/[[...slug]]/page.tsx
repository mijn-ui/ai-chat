import { cookies } from "next/headers";
import ChatViewPage from "@/features/chat/components/chat-view";

const Home = async () => {
	const cookieStore = await cookies();
	const defaultPanelOpen = cookieStore.get("chatPanel:state")?.value === "true";

	return <ChatViewPage defaultPanelOpen={defaultPanelOpen} />;
};

export default Home;
