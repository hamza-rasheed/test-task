import Landing from "./components/sections/landing/landing";
import WhereWeAre from "./components/sections/whereWeAre/whereWeAre";
import OurMission from "./components/sections/testimonials/OurMission";
import Testimonials from "./components/sections/testimonials/testimonials";
import SuboxoneTreatment from "./components/sections/suboxoneTreatment/suboxoneTreatment";

const App = () => {
	return (
		<>
			<Landing />
			<OurMission />
			<Testimonials />
			<SuboxoneTreatment />
			<WhereWeAre />
		</>
	);
};

export default App;
