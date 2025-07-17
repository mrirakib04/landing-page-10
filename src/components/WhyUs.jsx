import whyUsImg1 from "./../assets/img/Group.png";
import whyUsImg2 from "./../assets/img/Group 27.png";
import whyUsImg3 from "./../assets/img/Group 26.png";

const WhyUs = () => {
  return (
    <div className="container flex flex-col items-center w-full gap-5 py-10 px-5">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
        Why Choose Us
      </h2>
      <p className="text-gray-700 text-center md:w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        perspiciatis laudantium unde amet sapiente adipisci aspernatur pariatur
        cumque modi numquam!
      </p>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5 items-center justify-center lg:max-w-3xl">
        <div className="col-span-1 p-5 h-full rounded-xl bg-yellow-100 border border-yellow-300 w-full flex flex-col gap-1 items-start shadow-lg">
          <img className="h-12 mb-2" src={whyUsImg1} alt="whyUsImg1" />
          <h4 className="lg:text-xl text-lg font-semibold">
            Handpicked Hotels
          </h4>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsam
            doloremque aliquam voluptate neque praesentium non nisi ducimus!
          </p>
        </div>
        <div className="col-span-1 p-5 h-full rounded-xl bg-sky-100 border border-sky-300 w-full flex flex-col gap-1 items-start shadow-lg">
          <img className="h-12 mb-2" src={whyUsImg2} alt="whyUsImg2" />
          <h4 className="lg:text-xl text-lg font-semibold">
            World Class Service
          </h4>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            architecto, sunt quidem quo nulla cupiditate tempora at sapiente.
            Molestiae exercitationem maxime non.
          </p>
        </div>
        <div className="sm:col-span-2 col-span-1 sm:w-1/2 w-full mx-auto p-5 h-full rounded-xl bg-red-100 border border-red-300 flex flex-col gap-1 items-start shadow-lg">
          <img className="h-12 mb-2" src={whyUsImg3} alt="whyUsImg3" />
          <h4 className="lg:text-xl text-lg font-semibold">
            Best Price Guarantee
          </h4>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsam
            doloremque aliquam voluptate neque praesentium non nisi ducimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
