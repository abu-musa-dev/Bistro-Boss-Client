import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems);
            });
    }, []);

    return (
        <section className="mb-12">
            <SectionTitle sunheading="From Our Menu" heading="Popular Item" />
            <div className="grid md:grid-cols-2 gap-4 mt-10">
                {menu.map(item => <MenuItem key={item.id} item={item} />)}
            </div>
        </section>
    );
};

export default PopularMenu;
