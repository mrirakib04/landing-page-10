import { useState } from "react";
import logo from "./../assets/img/Group 40071 (2).png";
import bg from "./../assets/img/Group 13.png";
import { PiListBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container flex flex-col items-center w-full px-5">
      <nav className="w-full flex items-center justify-between gap-3 py-5">
        <a
          className="flex items-center gap-1 sm:text-3xl text-xl font-bold"
          href="./../../index.html"
        >
          <img className="sm:h-10 h-8" src={logo} alt="logo" />
          <h2>
            Hero <span className="text-orange-500">Travels</span>
          </h2>
        </a>
        <ul className="md:flex p-5 items-start gap-5 text-lg font-medium hidden">
          <li>
            <a
              className="text-gray-700 hover:text-orange-500 duration-300"
              href="./../../index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-orange-500 duration-300"
              href="#Packages"
            >
              Packages
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-orange-500 duration-300"
              href="#Testimonial"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-orange-500 duration-300"
              href="#Blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-orange-500 duration-300"
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={toggleNav}
          className="relative md:hidden block text-3xl "
        >
          <PiListBold></PiListBold>
        </button>
        {showNav && (
          <ul className="md:hidden flex-col p-5 border-2 rounded-2xl bg-gray-100 items-start gap-3 text-lg font-medium flex absolute top-16 right-3">
            <li>
              <a
                className="text-gray-700 hover:text-black duration-300"
                href="./../../index.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-black duration-300"
                href="#Packages"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-black duration-300"
                href="#Testimonial"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-black duration-300"
                href="#Blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-black duration-300"
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      <div
        style={{
          background: `url(${bg})`,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
        className="sm:w-11/12 w-full rounded-xl overflow-hidden"
      >
        <div className="bg-gradient-to-b text-white from-black/50 via-black/40 to-black/30 flex flex-col items-center gap-3 lg:py-20 sm:py-16 py-12 px-5">
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
            Explore Your Travel
          </h2>

          <p className="text-center md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero
            eveniet debitis quae beatae voluptates a animi ex.
          </p>
          <div className="mt-5 flex md:flex-row flex-col items-center gap-5 px lg:w-4/5 md:w-11/12 sm:w-11/12 w-full p-3 rounded-lg bg-white/40">
            <input
              className="py-2 px-2 w-full bg-white rounded-md text-gray-700"
              type="text"
              placeholder="Where Go"
            />
            <select className="py-2 px-2 w-full bg-white rounded-md text-gray-700">
              <option value="none" disabled selected>
                When
              </option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
            <select className="py-2 px-2 w-full bg-white rounded-md text-gray-700">
              <option value="none" disabled selected>
                Select Type
              </option>
              <option value="Day">Day</option>
              <option value="Weekly">Weekly</option>
              <option value="Contuctual">Contuctual</option>
            </select>
            <button className="py-2 px-2 w-full bg-orange-600 hover:bg-black duration-300 rounded-md text-white flex items-center gap-1 text-center justify-center font-medium">
              <FaSearch className="text-lg"></FaSearch> Find
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
