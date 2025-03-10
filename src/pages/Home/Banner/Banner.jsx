import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel-এর স্টাইল ইমপোর্ট করতে হবে
import React from 'react';

import banner1 from '../../../assets/01.jpg'
import banner2 from '../../../assets/02.jpg'
import banner3 from '../../../assets//03.png'
import banner4 from '../../../assets/04.jpg'
import banner5 from '../../../assets/05.png'
import banner6 from '../../../assets/06.png'

const Banner = () => {
    const onChange = (index) => {
        console.log(`Slide changed to: ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Clicked item index: ${index}`);
    };

    const onClickThumb = (index) => {
        console.log(`Clicked thumbnail index: ${index}`);
    };

    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src={banner1} alt="Slide 1" />
             
            </div>
            <div>
                <img src={banner2} alt="Slide 2" />
           
            </div>
            <div>
                <img src={banner3} alt="Slide 3" />
            </div>
            <div>
                <img src={banner4} alt="Slide 4" />
            </div>
            <div>
                <img src={banner5} alt="Slide 5" />
            </div>
            <div>
                <img src={banner6} alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default Banner;
