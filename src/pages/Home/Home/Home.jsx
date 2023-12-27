import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import ShadowBanner from "../ShadowBanner/ShadowBanner.jsx";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ShadowBanner></ShadowBanner>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;