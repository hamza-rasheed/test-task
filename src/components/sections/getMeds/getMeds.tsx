import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";

import { images } from "../../../core/images/images";
import { strings } from "../../../core/strings/strings";
import CustomButton from "../../reuseable/button/button";
import { memo } from "react";

const GetMeds = () => {
	return (
		<section className='w-screen h-fit bg-button-primary/50 overflow-hidden relative flex flex-col justify-center items-center'>
			<img
				src={images.thirdGif}
				alt='bg-gif'
				className='h-full w-full object-cover opacity-60 absolute top-0 -z-10'
			/>
			<div className='lg:w-1/2 w-[80%] text-xl h-fit text-center flex flex-col justify-center items-center my-20'>
				<motion.h2
					className='font-cabinetGroteskMedium md:text-2xl text-xl'
					initial={{ x: "-100vw", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
				>
					{strings.getMeds.secureAccess}
				</motion.h2>

				<motion.h1
					className='font-cabinetGroteskSemiBold lg:text-5xl text-3xl my-6'
					initial={{ x: "100vw", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
				>
					{strings.getMeds.heading}
				</motion.h1>

				<p className='md:text-xl text-lg'>{strings.getMeds.text}</p>

				<CustomButton className='bg-black hover:bg-gray-600 mt-10 sm:p-3'>
					{strings.getMeds.getApp} <ArrowUpRightIcon />
				</CustomButton>
			</div>
		</section>
	);
};

export default memo(GetMeds);
