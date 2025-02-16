import { RiDragMoveLine } from "react-icons/ri";

const Logo = () => {
	return (
		<div className="flex items-center gap-2 text-muted-foreground">
			<RiDragMoveLine size={20} />
			<p className="text-small font-bold uppercase">RAG Chat</p>
		</div>
	);
};

export default Logo;
