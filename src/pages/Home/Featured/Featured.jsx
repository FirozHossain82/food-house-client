import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-4 md:px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Welcome to Food House, where culinary excellence meets a cozy
            ambiance! Indulge your senses in a gastronomic journey at our
            restaurant, where every dish is a masterpiece crafted with passion
            and precision.
          </p>
          <Link to="/order/salad">
            <button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
