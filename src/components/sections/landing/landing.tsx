import { memo } from "react";
import { ArrowUpRightIcon } from "lucide-react";

import Navbar from "../navbar/navbar";
import { images } from "../../../core/images/images";
import { strings } from "../../../core/strings/strings";
import CustomButton from "../../reuseable/button/button";

const Landing = () => {
	return (
		<section className='h-screen bg-cover bg-center flex flex-col relative'>
			<img
				src={images.landingImage}
				alt='bg-gif'
				className='h-full w-full object-cover absolute top-0 -z-10'
				loading='lazy'
			/>
			<Navbar />
			<div className='text-white xl:w-[76vw] w-[90vw] m-auto'>
				<p className='font-cabinetGroteskRegular md:text-2xl text-lg'>
					{strings.landing.subheading}
				</p>
				<h3 className='lg:text-7xl mt-10 md:text-5xl sm:text-4xl text-2xl'>
					{strings.landing.heading[0]}
					<br />
					{strings.landing.heading[1]}
					<br />
					{strings.landing.heading[2]}
				</h3>
				<CustomButton className='mt-10 gap-x-2'>
					{strings.landing.downloadApp} <ArrowUpRightIcon />
				</CustomButton>
			</div>
		</section>
	);
};

export default memo(Landing);
