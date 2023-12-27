import ContactUs from "../../../Components/ContactUs/ContactUs.jsx";
import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import Featured from "../Featured/Featured.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import ShadowBanner from "../ShadowBanner/ShadowBanner.jsx";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ShadowBanner></ShadowBanner>
            <PopularMenu></PopularMenu>
            <ContactUs></ContactUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;