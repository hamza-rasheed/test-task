import { MapPin } from "lucide-react";
import Marquee from "react-fast-marquee";

import USAMap from "./map";
import { images } from "../../../core/images/images";
import { strings } from "../../../core/strings/strings";
import { memo } from "react";

const WhereWeAre = () => {
	return (
		<section className='w-full h-full xl:px-40 lg:px-10 px-8 lg:py-20 py-10'>
			<h2 className='text-button-primary text-xl md:text-2xl font-cabinetGroteskMedium'>
				{strings.whereWeAre.subHeading}
			</h2>
			<div className='w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start md:gap-0 gap-4'>
				<h1 className='text-text-primary 2xl:text-[3.25rem] lg:text-5xl text-4xl font-cabinetGroteskMedium'>
					{strings.whereWeAre.heading}
				</h1>
				<div className='flex flex-row justify-start items-center md:w-[35vw] w-full mt-4 md:mt-0'>
					{/* Using external package for slider */}
					<Marquee speed={80} pauseOnHover={true} gradient={false}>
						<img
							src={images.channels.cbs}
							className='channelsImages'
							alt='CBS News'
							loading='lazy'
						/>
						<img
							src={images.channels.abc}
							className='channelsImages'
							alt='ABC'
							loading='lazy'
						/>
						<img
							src={images.channels.nbc}
							className='channelsImages'
							alt='NBC'
							loading='lazy'
						/>
						<img
							src={images.channels.fox}
							className='channelsImages'
							alt='FOX'
							loading='lazy'
						/>
					</Marquee>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center md:mt-20 mt-10'>
				<h2 className='text-button-primary text-xl md:text-2xl font-cabinetGroteskMedium'>
					{strings.whereWeAre.statesWeCurrentlyServe[0]}
				</h2>
				<h1 className='text-text-primary 2xl:text-[3.25rem] lg:text-5xl text-4xl font-cabinetGroteskMedium'>
					{strings.whereWeAre.statesWeCurrentlyServe[1]}
				</h1>
				<p className='md:w-[50%] w-[80%] text-center text-text-secondary mt-4 md:text-xl text-base'>
					{strings.whereWeAre.currentlyServeMessage}
				</p>
			</div>
			<div className='flex md:flex-row flex-col justify-between items-center mt-10'>
				<div className='flex flex-col justify-center md:items-start items-center md:w-1/2 w-full overflow-hidden'>
					<div className='md:w-[25vw] w-[50vw] object-contain mb-2'>
						<img
							src={images.toronto}
							alt='toronto'
							className='-z-10 h-full w-full'
						/>
					</div>
					<h3 className='font-cabinetGroteskBold text-3xl my-2'>
						{strings.whereWeAre.toronto}
					</h3>
					<div className='flex flex-row justify-start items-center gap-x-2 text-button-primary md:w-full w-fit'>
						<MapPin />
						<p className='underline'>{strings.whereWeAre.address}</p>
					</div>
				</div>
				<div className='md:w-[50vw] w-full'>
					{/* USA MAP COMPONENT */}
					<USAMap />
				</div>
			</div>
		</section>
	);
};

export default memo(WhereWeAre);
