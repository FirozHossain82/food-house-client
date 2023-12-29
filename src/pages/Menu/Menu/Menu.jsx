import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover.jsx";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from "../../../hooks/useMenu.jsx";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
  return (
    <div>
      <Helmet>
        <title>Food House | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
       {/* Ofered menu */}
       <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu */}
            <MenuCategory items={dessert} img={dessertImg} subTitle={'Dessert'} title={'dessert'} ></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} img={pizzaImg} subTitle={'Pizza'} title={'pizza'}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} img={saladImg} subTitle={'Salad'} title={'salad'}></MenuCategory>
            {/* soup menu */}
            <MenuCategory items={soup} img={soupImg} subTitle={'Soup'} title={'soup'}></MenuCategory>
    </div>
  );
};

export default Menu;
