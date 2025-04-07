import { Facebook, Phone, Twitter, Youtube } from "lucide-react";

import { strings } from "../../../core/strings/strings";
import { memo } from "react";

const Footer = () => {
	return (
		<footer className='h-fit flex flex-col justify-center items-center w-screen lg:p-20 pt-10 px-4 md:pb-4 pb-2 lg:text-lg md:text-base text-xs'>
			<div className='flex flex-row justify-between items-start gap-x-4 lg:w-[80vw] max-w-full'>
				<div className='lg:w-96 w-60'>
					<p className='text-text-footerLogo lg:text-7xl md:text-5xl text-3xl font-cabinetGroteskBold mb-5'>
						{strings.footer.logo}
					</p>
					<p className='lg:text-lg md:text-base text-xs'>
						{strings.footer.text}
					</p>
				</div>
				<div className='linksContainer'>
					<p className='linkHeader'>{strings.footer.quickLinks.main}</p>
					<p>{strings.footer.quickLinks.home}</p>
					<p>{strings.footer.quickLinks.aboutUs}</p>
					<p>{strings.footer.quickLinks.owners}</p>
					<p>{strings.footer.quickLinks.tenants}</p>
					<p>{strings.footer.quickLinks.properties}</p>
				</div>
				<div className='linksContainer'>
					<p className='linkHeader'>
						{strings.footer.otherLinks.onlineMedications}
					</p>
					<p>{strings.footer.otherLinks.downloadApp}</p>
					<p>{strings.footer.otherLinks.startTreatment}</p>
					<p>{strings.footer.otherLinks.onlineMedications}</p>
					<p>{strings.footer.otherLinks.FAQ}</p>
				</div>
				<div className='linksContainer'>
					<p className='linkHeader'>{strings.footer.contact}</p>
					<p className='inline-flex gap-x-2'>
						<Phone className='w-4' /> {strings.footer.phoneNumber}
					</p>
					<p className='linkHeader'>{strings.footer.socialMedia}</p>
					<div className='socialMediaContainer'>
						<Twitter className='icons' />
						<Facebook className='icons' />
						<Youtube className='stroke-text-secondary' />
					</div>
					<p>{strings.footer.designedBy}</p>
				</div>
			</div>
			<div className='h-[1px] lg:w-[80vw] w-full bg-gray-300 mt-10 mb-5' />
			<p className='lg:w-[80vw] w-full'>{strings.footer.allRights}</p>
		</footer>
	);
};

export default memo(Footer);
