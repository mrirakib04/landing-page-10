import { useState } from "react";
import logo from "./../assets/img/Group 40071 (2).png";
import { PiListBold } from "react-icons/pi";

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
    </div>
  );
};

export default Header;
