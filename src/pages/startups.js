import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // These imports assume your setup supports CSS imports in JS
import "slick-carousel/slick/slick-theme.css";

import './startups.css'

import bookit from './logos/bookit.png'
import vango from './logos/vango.png'

// Images data
const images = [
    { id: 1, src: bookit, alt: "Image 1" },
    { id: 2, src: vango, alt: "heloooooo" },
];

// ImageSlider component
const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <div className="tag">
                <h1>Our Startups</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

// App component
const Startups = () => {
    return (
        <div className="startup-page">
            <ImageSlider images={images} />
        </div>
    );
};

export default Startups;
