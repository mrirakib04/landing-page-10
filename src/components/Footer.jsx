import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoFooter from "./../assets/img/Group 40071 (2).png";

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center w-full gap-5 py-10 px-5 mt-5">
      <h2 className="flex items-center gap-1 text-3xl font-bold">
        <img className="sm:h-10 h-8" src={logoFooter} alt="logoFooter" />
        Hero <span className="text-orange-500">Travels</span>
      </h2>
      <p className="text-gray-700 text-center md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        consectetur, in quae asperiores assumenda reprehenderit. Earum quos
        tempora enim cumque.
      </p>
      <div className="flex items-center gap-5 text-3xl text-black">
        <a
          href="https://www.facebook.com/"
          className="hover:text-blue-600 duration-300"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
        <a
          href="https://www.instagram.com/"
          className="hover:text-pink-600 duration-300"
          target="_blank"
        >
          <FaInstagram></FaInstagram>
        </a>
        <a
          href="https://www.linkedin.com/"
          className="hover:text-sky-600 duration-300"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          href="https://www.youtube.com/"
          className="hover:text-red-600 duration-300"
          target="_blank"
        >
          <FaYoutube></FaYoutube>
        </a>
      </div>
      <p className="py-5 mt-5 border-t-2 w-full text-center md:w-2/3 border-gray-500">
        2025, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
