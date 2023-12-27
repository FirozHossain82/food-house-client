
import chefImg from '../../../assets/home/chef-special.jpg'
const ShadowBanner = () => {
    return (
        <div className="hero min-h-screen mb-20  mx-auto bg-fixed" style={{ backgroundImage: `url(${chefImg})` }}>
        <div className="hero-content text-center  text-neutral-content  bg-white w-5/6">
            <div className="max-w-md text-black">
                <h1 className="mb-5 text-5xl font-bold">Food House</h1>
                <p className="mb-5">Welcome to Food House, where culinary excellence meets a cozy ambiance! Indulge your senses in a gastronomic journey at our restaurant, where every dish is a masterpiece crafted with passion and precision. Explore our diverse menu featuring a fusion of international flavors, from savory appetizers to decadent desserts. Immerse yourself in a dining experience that celebrates the art of food, accompanied by warm hospitality and a welcoming atmosphere. Join us at Food House, where every meal is a celebration of flavors, bringing people together for unforgettable moments.</p>
            </div>
        </div>
    </div>
    );
};

export default ShadowBanner;