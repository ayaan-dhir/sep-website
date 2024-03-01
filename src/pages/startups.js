import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // These imports assume your setup supports CSS imports in JS
import "slick-carousel/slick/slick-theme.css";

import './startups.css'

import bonsai from './logos/bonsai logo icon.png'
import bookit from './logos/bookit.png'
import cartello from './logos/cartello logo name.png'
import clearly from './logos/clearly logo color.png'
// import dw from './logos/dangerous woman logo color.png'
import diba from './logos/diBa logo white.png'
import disko from './logos/disko logo.png'
// import empathica from './logos/empathica logo white.png'
// import fino from './logos/fino logo color.png'
// import homefluent from './logos/home fluent logo.png'
import idefy from './logos/idefy logo color.png'
import lendopoly from './logos/lendopoly logo with name.png'
import lighthouse from './logos/lighthouse logo yellow.png'
import puerta from './logos/puerta abierta logo.png'
import recreate from './logos/recreate energy logo .png'
import redfordstartup from './logos/redford startup logo.png'
// import sixpiece from './logos/sixpiece logo name.png'
// import solids from './logos/solids logo color.png'
import soundsense from './logos/soundsense logo color.png'
import student from './logos/student inc logo.png'
import surplus from './logos/surplus logo.png'
import thrust from './logos/thrust aeronautics logo color.png'
import vango from './logos/vango.png'
import wastewise from './logos/wastewise logo.png'

// Images data
const images = [
    { id: 1, src: bonsai, alt: "Bonsai" },
    { id: 2, src: bookit, alt: "BookIt" },
    { id: 3, src: cartello, alt: "Cartello" },
    { id: 4, src: clearly, alt: "Clearly" },
    // { id: 5, src: dw, alt: "Dangerous Woman" },
    { id: 6, src: diba, alt: "DiBa" },
    { id: 7, src: disko, alt: "Disko" },
    // { id: 8, src: empathica, alt: "Empathica" },
    // { id: 9, src: fino, alt: "Fino" },
    // { id: 10, src: homefluent, alt: "HomeFluent" },
    { id: 11, src: idefy, alt: "IDefy" },
    { id: 12, src: lendopoly, alt: "Lendopoly" }, // Note: uses the same logo as IDefy
    { id: 13, src: lighthouse, alt: "Lighthouse" }, // Note: uses the same logo as IDefy
    { id: 14, src: puerta, alt: "Puerta Abierta" },
    { id: 15, src: recreate, alt: "Recreate Energy" },
    { id: 16, src: redfordstartup, alt: "Redford Startup" },
    // { id: 17, src: sixpiece, alt: "SixPiece" },
    // { id: 18, src: solids, alt: "Solids" },
    { id: 19, src: soundsense, alt: "SoundSense" },
    { id: 20, src: student, alt: "Student Inc" },
    { id: 21, src: surplus, alt: "Surplus" },
    { id: 22, src: thrust, alt: "Thrust Aeronautics" },
    { id: 23, src: vango, alt: "Vango" },
    { id: 24, src: wastewise, alt: "WasteWise" },
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
