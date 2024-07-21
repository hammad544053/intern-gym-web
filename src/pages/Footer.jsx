import logo from "../assets/logo.png";

// Importing external icons
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <footer className=" bg-slate-900">
      <div className="flex justify-between items-start mx-auto max-w-screen-lg py-8 px-4 md:px-8">
  {/* Left section */}
  <div className="flex items-center">
    <img className=" absolute w-20 h-20 -mt-[180px]" src={logo} alt="logo" />
    <div className="ml-4">
      <h1 className="text-white ml-14 font-bold text-4xl">FIT HUB</h1>
      <p className="text-white mt-2 w-[210px]">
        Explore Our Gym Website For A Seamless Fitness Experience, Offering Expert Guidance, Personalized Plans, And A Supportive Community To Elevate Your Workouts.
      </p>
    </div>
  </div>

  {/* Right section */}
  <div className="block items-center ml-6 md:ml-0 mt-6 md:mt-0">
    <div className="flex -ms-4 px-6 -mt-6   items-center">
      <h1 className="text-white font-bold text-4xl">Stop</h1>
      <img className="w-20 -ml-2 h-20 " src={logo} alt="logo" />
      <button className="rounded-full bg-yellow-600 text-white -ml-2 px-2 ">
        Enroll
      </button>
    </div>
    <div className="ml-6 md:ml-0 mt-4 ms-[28px] md:mt-0">
      <h1 className="text-white font-bold text-3xl">Wishing Start Doing</h1>
    </div>
  </div>
</div>

      <div className="border-b-2"></div>

      <div className="text-white flex gap-4 text-center">
        <div className="flex-1">
          <h1>Contact Us</h1>
          <p>+92320-9392671</p>
          <h1>Folow Us On</h1>
          <div className="flex justify-center">
          <Youtube size={32} color="#ff0000" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: '#00aff0', marginRight: '10px' }} />
          <Twitter size={32} color="#00bfff" strokeWidth={2.5} absoluteStrokeWidth />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', marginRight: '10px' }} />
          </div>
        </div>

        <div className="flex-1">
          <h1>Our Location</h1>
          <p>30 New Vergenia</p>
          <p>Block No : 2456</p>
          <p>2333 Square Meter</p>
        </div>

        <div className="flex-1">
          <h1>Working Hours</h1>
          <p>Monday To Friday</p>
          <p>Block No : 2456</p>
          <p>Block No : 2456</p>
        </div>

        <div className="flex-1">
          <h1>Week Ends</h1>
          <p>Saturday - Sunday</p>
          <p>National Holidays</p>
          <p>Local Holidays</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
