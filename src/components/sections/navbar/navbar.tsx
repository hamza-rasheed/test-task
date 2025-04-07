import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "../../../core/utils/utils";
import { strings } from "../../../core/strings/strings";
import CustomButton from "../../reuseable/button/button";

const navVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const sidebarVariants = {
	open: {
		clipPath: "circle(1500px at 40px 40px)",
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	},
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.2,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<nav
			className={cn(
				"absolute lg:relative justify-between items-center w-full lg:h-32 md:h-28 h-20 lg:w-[80vw] lg:max-w-[80vw] lg:bg-[#0000001A] backdrop-blur-md mx-auto lg:rounded-xl flex flex-row lg:justify-between lg:items-center lg:px-10 lg:mt-10 mt-4",
				menuOpen && "h-full md:pt-0 pt-10 lg:mt-4 mt-0 md:h-full"
			)}
		>
			<h1
				className={cn(
					"lg:text-[3.83rem] md:text-5xl text-3xl text-white font-cabinetGroteskBold pl-10 lg:p-0",
					menuOpen ? "hidden lg:flex" : "flex"
				)}
			>
				{strings.landing.logo}
			</h1>
			<CustomButton
				variant='ghost'
				className={cn(
					"text-white lg:hidden z-50 mr-10 lg:p-0",
					menuOpen ? "hidden" : "flex"
				)}
				onClick={() => setMenuOpen((prev) => !prev)}
			>
				<Menu className='min-w-6 min-h-6' />
			</CustomButton>
			<NavbarItems className='lg:flex hidden' />
			<motion.div
				className={cn(
					"top-0 w-full h-full absolute flex-col justify-center items-center",
					menuOpen ? "flex lg:hidden" : "hidden"
				)}
				initial='closed'
				animate={menuOpen ? "open" : "closed"}
				variants={sidebarVariants}
				transition={{ duration: 0.5 }}
			>
				<div className='w-full pl-10 pr-8 flex flex-row justify-between items-center mb-auto mt-12'>
					<h1 className='lg:text-[3.83rem] md:text-5xl text-3xl text-white font-cabinetGroteskBold'>
						{strings.landing.logo}
					</h1>
					<CustomButton
						variant='ghost'
						className='text-white lg:hidden z-50'
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<X className='min-w-6 min-h-6' />
					</CustomButton>
				</div>
				<motion.ul
					className='flex-col justify-center my-4 flex lg:flex-row lg:justify-start items-center gap-x-2 lg:gap-x-4'
					initial='closed'
					animate={menuOpen ? "open" : "closed"}
					variants={navVariants}
				>
					<NavbarItems />
				</motion.ul>
				<div className='mt-auto' />
			</motion.div>
		</nav>
	);
};

export default memo(Navbar);

function NavbarItems({ className }: { className?: string }) {
	return (
		<>
			<motion.div
				className={cn(
					"flex-col justify-center my-4 flex lg:flex-row lg:justify-start items-center gap-x-2 lg:gap-x-4",
					className
				)}
				variants={navVariants}
			>
				<CustomButton variant='ghost' className='activeItem'>
					{strings.landing.navbarItems.home}
				</CustomButton>
				<CustomButton variant='ghost' className='inactiveItem'>
					{strings.landing.navbarItems.about}
				</CustomButton>
				<CustomButton variant='ghost' className='inactiveItem'>
					{strings.landing.navbarItems.owners}
				</CustomButton>
				<CustomButton variant='ghost' className='inactiveItem'>
					{strings.landing.navbarItems.tenants}
				</CustomButton>
				<CustomButton variant='ghost' className='inactiveItem'>
					{strings.landing.navbarItems.properties}
				</CustomButton>
			</motion.div>
			<motion.div
				className={cn(
					"flex-col justify-center my-4 flex lg:flex-row lg:justify-start items-center gap-x-2 lg:gap-x-4",
					className
				)}
				variants={navVariants}
			>
				<CustomButton className='md:py-3 md:px-6 p-2 px-3 whitespace-nowrap md:text-base text-sm '>
					{strings.landing.startTreatment}
				</CustomButton>
			</motion.div>
		</>
	);
}
