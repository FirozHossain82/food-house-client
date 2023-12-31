import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem.jsx";
import Cover from "../../Shared/Cover/Cover.jsx";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
        {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex justify-center items-center ">
          <button className="btn btn-outline mb-4 text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
