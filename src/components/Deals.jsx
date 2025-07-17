import { FaStopwatch } from "react-icons/fa";
import dealsBg1 from "./../assets/img/Group 39.png";
import dealsBg2 from "./../assets/img/Group 40.png";
import { FaMapLocation, FaPeopleGroup } from "react-icons/fa6";

const Deals = () => {
  return (
    <div className="container flex flex-col items-center w-full gap-5 py-10 px-5">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
        Deals & Discounts
      </h2>
      <p className="text-gray-700 text-center md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        consectetur, in quae asperiores assumenda reprehenderit. Earum quos
        tempora enim cumque.
      </p>
      <div
        style={{
          background: `url(${dealsBg1})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-3 w-full sm:h-80 rounded-2xl px-5 pb-5 sm:pt-5 pt-28 shadow-lg border-b-2 border-gray-300 hover:-translate-3 content-center duration-500 flex justify-end"
      >
        <div className="flex flex-col items-start gap-1 bg-white/70 p-5 rounded-lg lg:w-lg md:w-md sm:w-sm">
          <div className="flex flex-wrap items-center gap-1 text-orange-600 font-medium">
            <p className="flex items-center gap-1">
              <FaStopwatch className="text-xl"></FaStopwatch>7-8 Days
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1">
                <FaPeopleGroup className="text-xl"></FaPeopleGroup>Max: 10
              </p>
              <p className="flex items-center gap-1">
                <FaMapLocation className="text-xl"></FaMapLocation>Malaysia
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-2">Tour to Selangor</h3>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sint illum animi consequuntur necessitatibus iste sed.
          </p>
          <p className="font-bold text-orange-700">Price: $1200-1500</p>
          <button className="text-lg font-medium bg-orange-500 text-white hover:bg-black duration-300 py-1 px-4 rounded-md mt-3">
            Book Now
          </button>
        </div>
      </div>
      <div
        style={{
          background: `url(${dealsBg2})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-3 w-full sm:h-80 rounded-2xl px-5 pb-5 sm:pt-5 pt-28 shadow-lg border-b-2 border-gray-300 hover:-translate-3 content-center duration-500"
      >
        <div className="flex flex-col items-start gap-1 bg-white/70 p-5 rounded-lg lg:w-lg md:w-md sm:w-sm">
          <div className="flex flex-wrap items-center gap-1 text-orange-600 font-medium">
            <p className="flex items-center gap-1">
              <FaStopwatch className="text-xl"></FaStopwatch>7-8 Days
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1">
                <FaPeopleGroup className="text-xl"></FaPeopleGroup>Max: 10
              </p>
              <p className="flex items-center gap-1">
                <FaMapLocation className="text-xl"></FaMapLocation>Malaysia
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-2">Tour to Selangor</h3>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sint illum animi consequuntur necessitatibus iste sed.
          </p>
          <p className="font-bold text-orange-700">Price: $1200-1500</p>
          <button className="text-lg font-medium bg-orange-500 text-white hover:bg-black duration-300 py-1 px-4 rounded-md mt-3">
            Book Now
          </button>
        </div>
      </div>
      <div
        style={{
          background: `url(${dealsBg1})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-3 w-full sm:h-80 rounded-2xl px-5 pb-5 sm:pt-5 pt-28 shadow-lg border-b-2 border-gray-300 hover:-translate-3 content-center duration-500 flex justify-end"
      >
        <div className="flex flex-col items-start gap-1 bg-white/70 p-5 rounded-lg lg:w-lg md:w-md sm:w-sm">
          <div className="flex flex-wrap items-center gap-1 text-orange-600 font-medium">
            <p className="flex items-center gap-1">
              <FaStopwatch className="text-xl"></FaStopwatch>7-8 Days
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1">
                <FaPeopleGroup className="text-xl"></FaPeopleGroup>Max: 10
              </p>
              <p className="flex items-center gap-1">
                <FaMapLocation className="text-xl"></FaMapLocation>Malaysia
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-2">Tour to Selangor</h3>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            sint illum animi consequuntur necessitatibus iste sed.
          </p>
          <p className="font-bold text-orange-700">Price: $1200-1500</p>
          <button className="text-lg font-medium bg-orange-500 text-white hover:bg-black duration-300 py-1 px-4 rounded-md mt-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
