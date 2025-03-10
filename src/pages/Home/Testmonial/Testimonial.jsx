import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviwes.json") 
      .then((res) => res.json()) 
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle sunheading="What Our Clients Say" heading="Testimonial" />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-5 m-24 bg-gray-100 rounded-lg shadow-lg">
              <p>{review.details}</p>
              <h3 className="2xl text-center mt-3 text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
