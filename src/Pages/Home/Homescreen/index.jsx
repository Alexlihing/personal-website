import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import Project from "../Projects";
import ContactMe from "../ContactMe";

export default function Home () {
    return (
        <>
            <HeroSection />
            <MySkills />
            {/* <MyPortfolio /> */}
            <Testimonial />
            <Project />
            <ContactMe/>
        </>
    )
}

/* add experience (include projects here) section with timeline */
/* change the reviews to testimonials/references section */

