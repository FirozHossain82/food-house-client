import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import MenuItem from "../../Shared/MenuItem/MenuItem.jsx";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category ==="popular");
            setMenu(popularItems)})
    },[])
    return (
        <section  className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-5">
                    <button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">View All Menu</button>
                </div>
        </section>
    );
};

export default PopularMenu;