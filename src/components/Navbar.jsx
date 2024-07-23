import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs"; // Import the search icon
import "../index.css";

// Import your profile picture
import dp from "../assets/dp.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchText(""); // Reset search text when opening the search
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Searching for:", searchText);
    // Additional logic for search functionality
  };

  return (
    <div className="Navbar px-16 md:px-16 lg:px-12 py-4 flex justify-between items-center min-w-full">
      <div className="flex items-center cursor-pointer">
        <Link
          to="/"
          className="font-Averia font-bold lg:ml-2 bg-opacity-35 lg:px-7"
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 rounded-full absolute -mt-4 md:-mt-4 md:-ml-[60px] lg:-ml-20 -ml-[60px]"
          />

<span className="Navheading text-2xl md:text-2xl lg:text-5xl font-serif gradient-text text-transparent bg-clip-text">
  FIT {' '}
</span>

<span className="Navheading2 text-2xl md:text-2xl lg:text-5xl font-serif gradient-text text-transparent bg-clip-text">
  HUB
</span>


        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center justify-center flex-grow">
        <nav className="flex  absolute  lg:gap-2 font-Poppins font-bold text-white md:text-lg ">
          <Link
            to="/"
            className="text-black hover:text-[#ffffff] px-2 border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 relative Navbtns"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-black hover:text-[#ffffff] px-2 border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 relative Navbtns"
          >
            About
          </Link>

          <Link
            to="/events"
            className="text-black hover:text-[#ffffff] px-2 border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 relative Navbtns"
          >
            Events
          </Link>

          <Link
            to="/blogs"
            className="text-black hover:text-[#ffffff] px-2 border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 relative Navbtns"
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className="text-black hover:text-[#ffffff] px-2 border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 relative Navbtns"
          >
            Contact
            
          </Link>
        </nav>
      </div>

      {/* Search Icon */}
      <div className="flex items-center -mr-4  cursor-pointer relative">
        {showSearch ? (
          <input
            type="text"
            placeholder="Search..."
            className="w-[160px] py-1 rounded bg-gray-900  md:-ml-[18px] focus:outline-none "
            value={searchText}
            onChange={handleSearchInputChange}
          />
        ) : (
          <BsSearch
            className="text-2xl text-blue-800"
            onClick={toggleSearch}
          />
        )}
        {showSearch && (
          <BsSearch
            className="text-2xl text-teal-500 absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleSearch}
          />
        )}
        
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl Navbtns  text-black cursor-pointer"
        >
          {open ? <VscClose /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`Navbar fixed top-0 ${
          open ? "left-0" : "-left-full"
        } h-full bg-[#027ffd] w-[60%] z-50 transition-all duration-1000 lg:hidden`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 rounded-full absolute mt-[45px]"
        />
        <div className="flex justify-center my-8 items-center text-xl cursor-pointer">
          <Link
            onClick={toggleMenu}
            to="/"
            className="font-Averia font-bold ml-2 bg-opacity-35 px-7"
          >
            <span className="Navheading3  text-3xl  font-serif text-black">
              FIT {/* */}
            </span>
            <span className="text-3xl font-serif Navheading4 text-black">
              HUB
            </span>
          </Link>
        </div>

        <Link
          onClick={toggleMenu}
          to="/"
          className="block text-black p-4 hover:font-bold border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 Navbtns"
        >
          Home
        </Link>

        <Link
          onClick={toggleMenu}
          to="/about"
          className="block text-black p-4 hover:text-[#000dfd] hover:font-bold border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 Navbtns"
        >
          About
        </Link>

        <Link
          onClick={toggleMenu}
          to="/events"
          className="block text-black p-4 hover:text-[#000dfd] hover:font-bold border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 Navbtns"
        >
          Events
        </Link>

        <Link
          onClick={toggleMenu}
          to="/blogs"
          className="block text-black p-4 hover:text-[#000dfd] hover:font-bold border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 Navbtns"
        >
          Blogs
        </Link>

        <Link
          onClick={toggleMenu}
          to="contact"
          className="block text-black p-4 hover:text-[#000dfd] hover:font-bold border-2 border-transparent hover:border-[#0000ff] hover:bg-black hover:rounded-[20px] hover:border-opacity-80 Navbtns "
        >
          Contact
        </Link>
        <img
          src={dp}
          alt="Profile"
          className="w-10 h-10 rounded-full mx-auto -mt-[320px] mr-2 Navbtns"
        />
      </nav>
    </div>
  );
};

export default Navbar;
