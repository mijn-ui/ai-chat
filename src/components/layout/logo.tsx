import Image from "next/image";
import { cn } from "@mijn-ui/react-theme";

const Logo = ({ className }: React.ComponentPropsWithRef<"div">) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Image src={"/picosbs.png"} width={24} height={24} alt="picosbs" />
			<p className="text-small text-muted-foreground">Pico Chat</p>
		</div>
	);
};

export default Logo;
