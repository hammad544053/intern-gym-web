import React from "react";
import Slider from "react-slick";
import mentor1 from "../assets/mentor-1.png";

// Importing external icons
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Responsive() {
  const SampleNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next-arrow absolute text-8xl text-blue-700 right-0  top-1/2 transform -translate-y-1/2 z-10 "
      onClick={onClick}
    >
      &gt; {/* Greater than symbol*/}
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow absolute text-8xl text-blue-700 left-0 top-1/2 -mt-[49px] z-10 " onClick={onClick}>
      &lt; {/* Less than symbol */}
    </div>
  );

  const settings = {
    dots: true, // Displaying pagination dots
    infinite: true, // Enabling continuous looping
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 4, // Number of slides visible at once (default for all screen sizes)
    slidesToScroll: 1, // Number of slides to scroll on button click
    nextArrow: <SampleNextArrow />, // Custom next arrow component
    prevArrow: <SamplePrevArrow />, // Custom previous arrow component
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 3, // Adjusting slidesToShow for medium screens
          slidesToScroll: 1, // Adjusting slidesToScroll for medium screens
          infinite: true, // Maintaining continuous looping for medium screens
          dots: true, // Keeping pagination dots for medium screens
        },
      },
      {
        breakpoint: 800, // Breakpoint for small screens
        settings: {
          slidesToShow: 2, // Adjusting slidesToShow for small screens
          slidesToScroll: 1, // Adjusting slidesToScroll for small screens
          initialSlide: 2, // Starting from the third slide on small screens (optional)
        },
      },
      {
        breakpoint: 600, // Breakpoint for very small screens
        settings: {
          slidesToShow: 1, // Show only one slide on very small screens
          slidesToScroll: 1, // Scroll one slide at a time on very small screens
        },
      },
    ],
  };

  return (
    <div className="slider-container pb-6">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="bg-slate-700 mx-auto rounded-full border-slate-500 border-2"
            src={mentor1}
            alt="mentor-1 rounded-full"
          />
          <div className="bg-slate-700 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90px] w-[300px] rounded-full border-slate-500 md:w-[230px] border-2">
          <h1 className="text-center text-2xl text-white font-serif">Ethan Thompson</h1>
          <p className="text-center text-white ">Weight Lifting Trainer</p>
          <div className="flex justify-center">
          <Youtube size={32} color="#ff0000" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: '#00aff0', marginRight: '10px' }} />
          <Twitter size={32} color="#00bfff" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', marginRight: '10px' }} />
          </div>
          </div>
        </div>
        
        <div className="relative">
          <img
            className="bg-slate-700 mx-auto rounded-full border-slate-500 border-2"
            src={mentor1}
            alt="mentor-1 rounded-full"
          />
          <div className="bg-slate-700 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90px] w-[300px] rounded-full border-slate-500 md:w-[230px] border-2">
          <h1 className="text-center text-2xl text-white font-serif">Ethan Thompson</h1>
          <p className="text-center text-white ">Weight Lifting Trainer</p>
          <div className="flex justify-center">
          <Youtube size={32} color="#ff0000" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: '#00aff0', marginRight: '10px' }} />
          <Twitter size={32} color="#00bfff" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', marginRight: '10px' }} />
          </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="bg-slate-700 mx-auto rounded-full border-slate-500 border-2"
            src={mentor1}
            alt="mentor-1 rounded-full"
          />
          <div className="bg-slate-700 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90px] w-[300px] rounded-full md:w-[230px] border-slate-500 border-2">
          <h1 className="text-center text-2xl text-white font-serif">Ethan Thompson</h1>
          <p className="text-center text-white ">Weight Lifting Trainer</p>
          <div className="flex justify-center">
          <Youtube size={32} color="#ff0000" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: '#00aff0', marginRight: '10px' }} />
          <Twitter size={32} color="#00bfff" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', marginRight: '10px' }} />
          </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="bg-slate-700 mx-auto rounded-full border-slate-500 border-2"
            src={mentor1}
            alt="mentor-1 rounded-full"
          />
          <div className="bg-slate-700 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90px] w-[300px] rounded-full border-slate-500 md:w-[230px]  border-2">
          <h1 className="text-center text-2xl text-white font-serif">Ethan Thompson</h1>
          <p className="text-center text-white ">Weight Lifting Trainer</p>
          <div className="flex justify-center">
          <Youtube size={32} color="#ff0000" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: '#00aff0', marginRight: '10px' }} />
          <Twitter size={32} color="#00bfff" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', marginRight: '10px' }} />
          </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
