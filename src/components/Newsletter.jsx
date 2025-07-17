import newsletterBg from "./../assets/img/Rectangle 8-1.png";

const Newsletter = () => {
  return (
    <div
      id="Contact"
      className="container grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 justify-center items-center w-full gap-5 py-10 px-5"
    >
      <div className="md:col-span-2 col-span-1 p-5 rounded-2xl border border-orange-500 flex flex-col items-start gap-1 shadow-lg">
        <h4 className="text-xl font-semibold">Newsletter</h4>
        <p className="text-gray-700">
          Get your daily dose of travel news & tips. <br /> Sign up today!
        </p>
        <input
          className="bg-gray-200 py-2 mt-4 px-2 w-full rounded-lg"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="bg-gray-200 py-2 mt-2 px-2 w-full rounded-lg"
          type="email"
          placeholder="Your Email"
        />
        <button className="py-2 text-lg mt-2 px-4 w-full bg-orange-600 hover:bg-black duration-300 rounded-lg text-white text-center font-semibold">
          Subscribe
        </button>
      </div>
      <div
        style={{
          background: `url(${newsletterBg})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="md:col-span-3 col-span-1 p-5 pb-8 pr-2 rounded-2xl sm:h-full h-60 flex items-end justify-end shadow-lg"
      >
        <div className="bg-orange-500 -rotate-[20deg] text-white flex flex-col items-center w-fit py-2 px-8 rounded-2xl">
          <p className="font-medium">Travel.com</p>
          <h5 className="text-xl font-semibold">Save up to 70%</h5>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
