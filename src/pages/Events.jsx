import { MoveRight } from 'lucide-react';

import trophy1 from "../assets/trophy-1.webp";
import trophy2 from "../assets/trophy-2.webp";
import trophy3 from "../assets/trophy-3.webp";
import trophy4 from "../assets/trophy-4.webp";
import trophy5 from "../assets/trophy-5.webp";
import trophy6 from "../assets/trophy-6.webp";
import trophy7 from "../assets/trophy-7.webp";
import trophy8 from "../assets/trophy-8.webp";
import trophy10 from "../assets/trophy-10.webp";
import trophy11 from "../assets/trophy-11.webp";

const Events = () => {
  return (

    <div>
      {/* Latest Events Section */}
  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">Latest Events</h1>
  <div className="flex flex-wrap justify-center">
    <div>
    <h1 className='text-white absolute mt-10 ml-[200px] font-bold text-3xl'>July 2024</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy4} alt="latest-blogs-1" />
      <h1 className='text-yellow-500 absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
    <h1 className='text-blue-800 absolute mt-10 ml-[180px] font-bold text-3xl'>March 2024</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy2} alt="latest-blogs-2" />
      <h1 className='text-red-600 absolute -mt-16 ml-4 font-bold text-3xl'>2<sup>nd</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>
  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">2023</h1>
  <div className="flex flex-wrap justify-center">
    <div>
    <h1 className='text-black absolute mt-10 ml-[200px] font-bold text-3xl'>Feb 2023</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy3} alt="latest-blogs-1" />
      <h1 className='text-yellow-500 absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
    <h1 className='text-black absolute mt-10 ml-[160px] font-bold text-3xl'>August 2023</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy1} alt="latest-blogs-2" />
      <h1 className='text-blue-800 absolute -mt-16 ml-4 font-bold text-3xl'>3<sup>rd</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>

  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">2021-2022</h1>
  <div className="flex flex-wrap justify-center">
    <div>
    <h1 className='text-Black absolute mt-4 ml-[200px] font-bold text-3xl'>January 2021</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy5} alt="latest-blogs-1" />
      <h1 className='text-black absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
    <h1 className='text-black absolute mt-4 ml-[180px] font-bold text-3xl'>Octuber 2022</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy6} alt="latest-blogs-2" />
      <h1 className='text-green-500 absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>

  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">2020</h1>
  <div className="flex flex-wrap justify-center">
    <div>
    <h1 className='text-violet-500 absolute mt-4 ml-[200px] font-bold text-3xl'>May 2020</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy7} alt="latest-blogs-1" />
      <h1 className='text-lime-500 absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
    <h1 className='text-black absolute mt-10 ml-[200px] font-bold text-3xl'>July 2020</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy8} alt="latest-blogs-2" />
      <h1 className='text-red-600 absolute -mt-16 ml-4 font-bold text-3xl'>2<sup>nd</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>

  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">All time</h1>
  <div className="flex flex-wrap justify-center">
    <div>
    <h1 className='text-black absolute mt-10 ml-[200px] font-bold text-3xl'>July 2019</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy10} alt="latest-blogs-1" />
      <h1 className='text-black absolute -mt-16 ml-4 font-bold text-3xl'>3<sup>rd</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
    <h1 className='text-white absolute mt-4 ml-[160px] font-bold text-3xl'>December 2019</h1>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={trophy11} alt="latest-blogs-2" />
      <h1 className='text-white absolute -mt-16 ml-4 font-bold text-3xl'>1<sup>st</sup> Position</h1>
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>
  
  </div>
  


  )
}

export default Events
