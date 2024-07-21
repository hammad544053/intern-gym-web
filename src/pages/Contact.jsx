import { Link } from "react-router-dom";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-[56px]">
      <h1 className="my-10 text-center font-bold text-4xl text-blue-600">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-white py-[55px]">
          <Link to={`https://www.google.com/maps/place/Captain+Dr.+Maqbali+Khan+Khalil+Hospital/@33.973016,71.5136811,17z/data=!3m1!4b1!4m6!3m5!1s0x38d9177daae4c83d:0xe90a2ee4143612a7!8m2!3d33.9730116!4d71.516256!16s%2Fg%2F11xs9sxf2?entry=ttu`} className=" text-red-600 font-bold text-2xl hover:underline">
            Custom Chowk Bacha Khan International Airport (near Dr. Maqbali Khan Khalil Hospital), Peshawar
          </Link>
        </p>
        <p className="my-4 text-white">
          <a href={`https://wa.me/${CONTACT.phoneNo}`} className="text-red-600 font-bold text-2xl hover:underline">
            {CONTACT.phoneNo}
          </a>
        </p>
        <Link to={`mailto:${CONTACT.email}`} className="border-b text-blue-800 font-bold text-2xl">
          {CONTACT.email}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
