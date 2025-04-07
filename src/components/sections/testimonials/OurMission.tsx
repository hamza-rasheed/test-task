import { memo } from "react";
import { images } from "../../../core/images/images";
import { strings } from "../../../core/strings/strings";

const OurMission = () => {
	return (
		<div
			className='w-full h-fit relative overflow-hidden bg-cover bg-center md:py-20 py-10'
			style={{ backgroundImage: `url(${images.firstGif})` }}
		>
			<div className='absolute inset-0 bg-white opacity-75'></div>
			<div className='relative z-10 text-2xl flex md:flex-row flex-col items-center justify-between h-full xl:px-40 lg:px-10 px-8 lg:gap-x-20 gap-x-10'>
				<div className='flex-1'>
					<h1 className='font-cabinetGroteskMedium lg:text-5xl text-text-primary md:text-4xl text-3xl md:mb-2 mb-4'>
						{strings.ourMission.heading[0] + " "}
						<br className='md:visible hidden' />
						{strings.ourMission.heading[1]}
					</h1>
					<p className='xl:text-xl xl:mt-4 text-text-secondary lg:text-lg lg:mt-2 text-base'>
						{strings.ourMission.mission}
					</p>
				</div>
				<div className='flex md:flex-col flex-col-reverse justify-center items-center flex-1'>
					<p className='xl:text-xl text-text-secondary lg:text-lg text-base'>
						{strings.ourMission.whatWeDo}
					</p>
					<div className='md:mt-6 my-6 flex flex-row justify-between items-center w-full gap-x-4'>
						<GifDiv
							title={strings.ourMission.record[0].number}
							text={strings.ourMission.record[0].title}
						/>
						<GifDiv
							title={strings.ourMission.record[1].number}
							text={strings.ourMission.record[1].title}
						/>
						<GifDiv
							title={strings.ourMission.record[2].number}
							text={strings.ourMission.record[2].title}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(OurMission);

function GifDiv({ title, text }: { title: string; text: string }) {
	return (
		<div className='flex flex-col justify-center items-start'>
			<h2 className='text-button-primary font-cabinetGroteskSemiBold xl:text-4xl lg:text-3xl md:text-xl text-2xl'>
				{title}
			</h2>
			<p className='font-cabinetGroteskMedium  text-text-primary xl:text-2xl xl:mt-2 lg:text-lg mt-1 text-base'>
				{text}
			</p>
		</div>
	);
}
