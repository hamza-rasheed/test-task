import { images } from "../../../core/images/images";

const TestimonialCards = ({
	image,
	message,
	userName,
}: {
	image: string;
	message: string;
	userName: string;
}) => {
	return (
		<div className='relative lg:p-7 p-4 border border-gray-200 rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:md:-translate-y-2 hover:md:-rotate-6 ease-out hover:md:scale-105 hover:md:z-10 group'>
			<div className='flex flex-row justify-start items-center gap-x-2'>
				<Star />
				<Star />
				<Star />
				<Star variant='halfFilled' />
				<Star variant='empty' />
			</div>
			<p className='lg:text-lg text-base my-6'>{message}</p>
			<div className='w-full flex flex-row justify-start items-center gap-x-3'>
				<img
					src={image}
					alt='profile-image'
					className='lg:h-[3.75rem] h-11 object-contain'
				/>
				<p className='font-cabinetGroteskMedium text-text-primary lg:text-xl text-lg group-hover:md:ml-1 duration-200'>
					{userName}
				</p>
			</div>
		</div>
	);
};

export default TestimonialCards;

function Star({
	variant = "filled",
}: {
	variant?: "filled" | "halfFilled" | "empty";
}) {
	return (
		<img
			src={images.star[variant]}
			alt={variant}
			className='lg:w-6 w-4 object-contain'
		/>
	);
}
