import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureimg from"../../../assets/home/featured.jpg"
import './Features.css'


const Features = () => {
    return (
        <div className="Features-img pt-8 my-10 bg-fixed text-white">
            <SectionTitle sunheading={"Check it Out"} heading={"Feature Item"}>

            </SectionTitle>

            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featureimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug, 2029</p>
                    <p className="uppercase"> Where can i get some..?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, in? Animi deserunt obcaecati harum porro sapiente delectus temporibus voluptate commodi ducimus officia laboriosam non dignissimos, quasi id quae magni voluptatem voluptatibus magnam! Repellat quia reprehenderit facilis sit ratione voluptates vero cum deserunt a aut id, iusto dolor magnam. Modi, commodi.</p>
                    <button class="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;