import { memo } from "react";
import { ArrowUpRightIcon } from "lucide-react";

import { images } from "../../../core/images/images";
import { strings } from "../../../core/strings/strings";
import CustomButton from "../../reuseable/button/button";
import SideSteps from "../../reuseable/sideSteps/sideSteps";

const SuboxoneTreatment = () => {
	return (
		// Padding different for different screen sizes. This div acts as a row for large screens and column for smaller screens
		<section className='bg-[linear-gradient(-123.74deg,rgba(73,199,171,0.32)_11.54%,rgba(255,255,255,0.32)_111.58%)] w-screen h-fit rounded-xl xl:px-40 lg:px-10 px-8 lg:py-20 py-10 relative min-h-[80vh]'>
			<img
				src={images.secondGif}
				alt='gif-circle'
				className='absolute inset-0 m-auto h-[55%] object-contain -z-10 opacity-90'
				loading='lazy'
			/>
			<h2 className='text-button-primary text-xl md:text-2xl font-cabinetGroteskMedium'>
				{strings.suboxone.subHeading}
			</h2>
			<div className='flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start md:mt-4 mt-2'>
				<h1 className='font-cabinetGroteskMedium 2xl:text-[3.25rem] lg:text-5xl text-4xl'>
					{strings.suboxone.heading}
				</h1>
				<CustomButton className='w-full md:w-fit py-3 text-lg md:mt-0 mt-4'>
					{strings.suboxone.downloadApp}
					<ArrowUpRightIcon className='w-5 h-5' />
				</CustomButton>
			</div>
			{/* These divs act as a row for large screens and column for smaller screens */}

			<div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-2 md:gap-0'>
				<SideSteps
					title={strings.suboxone.steps[0].title}
					text={strings.suboxone.steps[0].text}
				/>
				<SideSteps
					title={strings.suboxone.steps[1].title}
					text={strings.suboxone.steps[1].text}
				/>
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center my-14 gap-2 md:gap-0'>
				<SideSteps
					title={strings.suboxone.steps[2].title}
					text={strings.suboxone.steps[2].text}
				/>
				<SideSteps
					title={strings.suboxone.steps[3].title}
					text={strings.suboxone.steps[3].text}
				/>
			</div>
			<div className='flex flex-row justify-center items-center'>
				<SideSteps
					title={strings.suboxone.steps[4].title}
					text={strings.suboxone.steps[4].text}
				/>
			</div>
		</section>
	);
};

export default memo(SuboxoneTreatment);
