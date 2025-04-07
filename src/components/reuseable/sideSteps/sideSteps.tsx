const SideSteps = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className='border border-button-primary lg:w-[30vw] md:w-[40vw] w-full rounded-2xl bg-white md:px-4 md:py-6 p-3 '>
			<h1 className='font-cabinetGroteskMedium md:text-lg text-base mb-1'>
				{title}
			</h1>
			<p className='text-text-secondary md:text-base text-sm'>{text}</p>
		</div>
	);
};

export default SideSteps;
