import { Helmet } from "react-helmet-async";
import ContactUs from "../../../Components/ContactUs/ContactUs.jsx";
import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import Featured from "../Featured/Featured.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import ShadowBanner from "../ShadowBanner/ShadowBanner.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food House | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ShadowBanner></ShadowBanner>
      <PopularMenu></PopularMenu>
      <ContactUs></ContactUs>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
