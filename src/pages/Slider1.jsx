import React from 'react';
import Slider from 'react-slick';

import { PersonStanding } from 'lucide-react';
import { Users } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import { Rainbow } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { SprayCan } from 'lucide-react';
import { HandHeart } from 'lucide-react';
import { Award } from 'lucide-react';



// Import your images
import female2 from "../assets/female-2.jpg";
import boyrope3 from "../assets/boy-rope-3.jpg";
import triseps11 from "../assets/triseps-11.jpg";
import bisep1 from "../assets/bisep-1.jpg";
import bisep3 from "../assets/bisep-3.jpg";
import bisep4 from "../assets/bisep-4.jpg";
import femalehang1 from "../assets/female-hang-1.jpg";
import femalehang2 from "../assets/female-hang-2.jpg";

function Responsive() {
  const SampleNextArrow = ({ onClick }) => (
    <div className="custom-arrow next-arrow absolute text-8xl text-white right-0 mt-[-28px] transform -translate-y-1/2 z-10 h-[500px]" onClick={onClick}>
      &gt; {/* Greater than symbol*/}
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow absolute mt-[128px] text-8xl text-white z-10 " onClick={onClick}>
      &lt; {/* Less than symbol */}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // changing dots color
  const customDotStyle = `
    .slick-dots li button:before {
      color: #fff !important;
    }
  `;

  return (
    <div className="slider-container pb-8">
      <style>{customDotStyle}</style>
      <Slider {...settings}>
        {/* Slide 1 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={female2}
      alt="female-2"
    />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Body Shaping & Fitness
      </h1>
    </div>
  </div>
  <PersonStanding className="absolute top-10 left-1/2 transform -translate-x-1/2 border-2 text-white" size={100} />
</div>

{/* Slide 2 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={bisep3}
      alt="bisep-3"
    />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Group Training
      </h1>
    </div>
  </div>
  <Users className="absolute top-10 left-1/2 transform -translate-x-1/2 text-cyan-400 border-2" size={100} />
</div>

{/* Slide 3 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={boyrope3}
      alt="boy-rope-3"
    />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Single & Special Training
      </h1>
    </div>
  </div>
  <UserCheck className="absolute top-10 left-1/2 transform -translate-x-1/2 text-blue-700 border-2" size={100} />
</div>

{/* Slide 4 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={triseps11}
      alt="triseps-11"
    />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Triceps Shaping
      </h1>
    </div>
  </div>
  <Rainbow className="absolute top-10 left-1/2 transform -translate-x-1/2 z-0 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 via-green-400 to-blue-400 via-indigo-400 to-purple-400 border-2" size={100} />
</div>

{/* Slide 5 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={bisep1}
      alt="bisep-1"
    />
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Bicep Shaping
      </h1>
    </div>
  </div>
  <Dumbbell className="absolute top-10 left-1/2 transform -translate-x-1/2 text-slate-700 border-2" size={100} />
</div>


        {/* Slide 6 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={bisep4}
      alt="bisep-4"
    />
    <div className="absolute bottom-10 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Special Focus on Diet
      </h1>
    </div>
  </div>
  <SprayCan className="absolute top-10 left-1/2 transform -translate-x-1/2 text-lime-300 border-2" size={100} />
</div>


        {/* Slide 7 */}
<div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={femalehang1}
      alt="female-hang-1"
    />
    <div className="absolute bottom-10 left-0 right-0 text-center">
      <h1 className="text-white font-bold text-2xl bg-black bg-opacity-50 inline-block px-4 py-2">
        Physical & Mental Health
      </h1>
    </div>
  </div>
  <HandHeart className="absolute top-10 left-1/2 transform -translate-x-1/2 text-red-600 border-2" size={100} />
</div>


        {/* Slide 8 */}
        <div className="relative">
  <div className="w-[300px] h-[400px] mx-auto relative">
    <img
      className="w-full h-full object-cover"
      src={femalehang2}
      alt="female-hang-2"
    />
    <h1 className="absolute bottom-10 left-0 right-0 text-white font-bold text-2xl bg-black bg-opacity-50 text-center px-4 py-2">
      Competitions
    </h1>
  </div>
  <Award className="absolute top-10 left-1/2 transform -translate-x-1/2 text-amber-400 border-2 " size={100} />
</div>

      </Slider>
    </div>
  );
}

export default Responsive;
