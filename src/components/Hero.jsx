
//  The Main pic of gym
import homefullscreenpic from "../assets/home-full-screen-pic.jpg";
import vidicon from "../assets/vid-icon.png";
import latestblogs1 from "../assets/latest-blogs-1.jpg";
import latestblogs2 from "../assets/latest-blogs-2.jpg";
import rod3 from "../assets/rod-3.jpg";
import Discount60 from "../assets/Discount-60.png";

// importing external elements or icons form lucide and other platform
import { MoveRight } from 'lucide-react';

//  Imported all pages
// import Push from "../pages/Push";
import Plans from "../pages/Plans";
import Slider1 from "../pages/Slider1";
import Slider2 from "../pages/Slider2";
import Video from "../pages/Video";



const Hero = () => {
  return (
    //  Design main content and main section
    <div className=" overflow-hidden">
      <div className="relative h-screen">
      {/* Background image */}
      <img
        src={homefullscreenpic}
        alt="home-full-screen-pic"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Heading overlay */}
      <div className="absolute items-start left-[180px] top-1/2 w-[340px] transform -translate-x-1/2 -translate-y-1/2 text-left ml-1 text-white z-10">
  <h1 className="text-2xl lg:text-4xl md:text-3xl sm:text-2xl mt-[-230px] font-bold">
    Elevate your fitness Journey. Enroll in our Gym classes now!
  </h1>
  <p className="mt-1  text-black-900">
    Our user-friendly platform makes managing transactions a breeze. Ensuring
    a hassle-free experience for you and your team. Join our gym classes and
    unlock your full potential.
  </p>
  <button className="bg-yellow-500 mt-2 px-2">Enroll Now</button>
  <img className="w-8 absolute ml-28 -mt-7" src={vidicon} alt="vid-icon" />
  <p className="absolute -mt-5 ml-[150px] font-bold">Watch video</p>
  <h1 className="absolute mt-2 font-bold text-white text-3xl w-[200px] text-opacity-60">20 YEARS OF SERVICE</h1>
</div>
    </div>

{/* <Push />     */}
    
    {/* Our Trtaining section */}
    <div className="py-8">
      <h2 className="font-bold text-4xl text-white mb-4 text-center"> Look at Our Trainings</h2>
      <p className="mx-auto text-slate-400 text-center mb-4">Unleash your potential through dynamic gym training sessions. where strenghth meeets endurance for a healthier, stronger you.</p>
    <Slider1 />
    <button className="flex items-center mx-auto bg-yellow-600 py-2 rounded px-1"> Show More<MoveRight /></button>

    </div>
      {/* Latest Blogs Section */}
    <div>
  <h1 className="text-center text-white font-bold text-3xl pt-4 my-2">Latest Blogs & News</h1>
  <p className="text-center text-slate-400 my-4">
    Dive into a world of trending topics, expert opinions, and timely news bites. Don't miss out; explore the latest now!
  </p>
  <div className="flex flex-wrap justify-center">
    <div>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={latestblogs1} alt="latest-blogs-1" />
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-1">Read More</button>
        <MoveRight className="my-6 text-white " />
      </div>
      <hr className="border-t-4 border-white "/>
    </div>
    <div>
      <img className="w-[500px] h-[400px] p-2 border-yellow-500 border-2" src={latestblogs2} alt="latest-blogs-2" />
      <div className="flex justify-between items-center mr-8">
        <button className="bg-neutral-100 text-blue-800 font-bold hover:bg-green-800 hover:text-white rounded px-1 ml-2">Read More</button>
        <MoveRight className="my-6 text-white" />
      </div>
      <hr className="border-t-4 border-white ml-2"/>
    </div>
  </div>
</div>

{/* watch a video */}

    <Video />
    <Plans />
    
{/* Our Trainers/Mentors Section  */}
      <div>
          <h2 className="text-4xl text-white font-bold text-center">
          Meet Our Mentors
          </h2>
          <p className="text-white text-center py-2">Learn from seasoned experts-our mentors are here to inspire and empower you</p>
          <Slider2 />
          </div>

          {/* Discounts section */}
          <div className="text-white relative">
  <div className="text-center">
    <h1 className="text-4xl font-bold py-2">60% Discount Offer</h1>
    <p className="py-4 text-white">Seize the moment! Get a fabulous 60% discount and treat yourself to the best deals in town.</p>
  </div>
  <div>
<img
        src={rod3}
        alt="home-full-screen-pic"
        className="w-full h-[500px] z-0"
      />
      <div>
        <img  className="absolute h-[500px] w-[240px] opacity-85 sm:w-[240px] md:w-[300px] lg:w-[350px] -mt-[500px] right-0" src={Discount60} alt="" />
</div>

  </div>
  </div>


  </div>
  );
};
export default Hero;