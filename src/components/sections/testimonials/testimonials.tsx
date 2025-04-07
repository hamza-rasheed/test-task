import { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import TestimonialCards from "../../reuseable/testimonialCards/testimonialCards";
import CustomButton from "../../reuseable/button/button";
import { strings } from "../../../core/strings/strings";
import { images } from "../../../core/images/images";

const Testimonials = () => {
	return (
		<section className='w-screen min-h-full flex flex-col'>
			<div className='w-full xl:px-40 lg:px-10 px-8'>
				<div className='w-full md:my-20 my-10 flex-1 flex md:flex-row flex-col justify-between items-center md:gap-x-10'>
					<div className='h-fit'>
						<h2 className='text-button-primary text-xl md:text-2xl font-cabinetGroteskMedium'>
							{strings.testimonials.subHeading}
						</h2>
						<h1 className='text-text-primary 2xl:text-[3.25rem] lg:text-5xl text-4xl font-cabinetGroteskMedium mt-4'>
							{strings.testimonials.heading}
						</h1>
						<p className='mt-4 text-text-secondary'>
							{strings.testimonials.subLines[0]}
						</p>
						<p className='mt-4 text-text-secondary'>
							{strings.testimonials.subLines[1]}
						</p>
					</div>
					<div className='xl:min-w-[500px] xl:w-[500px] md:w-[400px] md:min-w-[400px] min-w-80 w-[90%] relative flex flex-row justify-center items-center mt-4 md:mt-0'>
						<img
							src={images.landingImage}
							className='w-full object-contain rounded-2xl -z-10'
							alt='landing-image'
						/>
						<img
							src={images.playButton}
							className='hover:opacity-80 xl:w-36 w-28 cursor-pointer absolute'
							alt='playButton'
						/>
					</div>
				</div>
				<h2 className='text-button-primary text-2xl font-cabinetGroteskMedium mb-4'>
					{strings.testimonials.ourClients}
				</h2>
				<div className='w-full flex flex-row justify-between items-center md:mb-10 mb-6'>
					<h1 className='text-text-primary xl:text-[3.25rem] lg:text-4xl text-3xl font-cabinetGroteskMedium'>
						{strings.testimonials.testimonials}
					</h1>
					<div className='flex flex-row items-center gap-x-2'>
						<CustomButton variant='outline' className='rounded-full md:p-2 p-1'>
							<ArrowLeft className='w-4 h-4 md:w-5 md:h-5' />
						</CustomButton>
						<CustomButton className='rounded-full md:p-2 p-1'>
							<ArrowRight className='w-4 h-4 md:w-5 md:h-5' />
						</CustomButton>
					</div>
				</div>
				<div className='w-full flex md:flex-row flex-col justify-between items-start mb-40 md:gap-0 md:gap-x-10 gap-3'>
					<TestimonialCards
						image={images.user.user1}
						message={strings.testimonials.cards[0].message}
						userName={strings.testimonials.cards[0].user}
					/>
					<TestimonialCards
						image={images.user.user2}
						message={strings.testimonials.cards[1].message}
						userName={strings.testimonials.cards[1].user}
					/>
					<TestimonialCards
						image={images.user.user3}
						message={strings.testimonials.cards[2].message}
						userName={strings.testimonials.cards[2].user}
					/>
				</div>
			</div>
		</section>
	);
};

export default memo(Testimonials);
