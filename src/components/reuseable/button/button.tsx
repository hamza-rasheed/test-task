import { ReactNode } from "react";
import { cn } from "../../../core/utils/utils";

const CustomButton = ({
	children,
	className,
	variant = "primary",
	onClick = () => {},
}: {
	children: ReactNode;
	className?: string;
	variant?: "primary" | "ghost" | "outline";
	onClick?: () => void;
}) => {
	const variants = {
		primary:
			"bg-button-primary rounded-lg hover:bg-button-primary/85 border border-button-primary",
		ghost: "hover:text-gray-400 text-black",
		outline:
			"hover:text-gray-400 text-gray-500 border border-gray-500 hover:border-gray-400",
	};
	return (
		<button
			className={cn(
				"w-fit flex flex-row justify-center items-center min-w-fit xl:text-lg lg:text-base md:text-base truncate text-white font-cabinetGroteskBold duration-150 md:p-3 p-2 text-sm",
				variants[variant],
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default CustomButton;
