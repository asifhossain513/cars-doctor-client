import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Contact></Contact>
        <WhyUs></WhyUs>
        <Testimonial></Testimonial>
      </div>
    );
};

export default Home;