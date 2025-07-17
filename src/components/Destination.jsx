import Maldives from "./../assets/img/Rectangle 5.png";
import Indonesia from "./../assets/img/Rectangle 8.png";
import Srilanka from "./../assets/img/Rectangle 6.png";
import America from "./../assets/img/Rectangle 7.png";
import Kashmir from "./../assets/img/Rectangle 9.png";
import Bangladesh from "./../assets/img/Rectangle 11.png";
import Bandarban from "./../assets/img/Rectangle 10.png";

const Destination = () => {
  return (
    <div
      id="Packages"
      className="container flex flex-col items-center w-full gap-5 py-10 px-5"
    >
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
        Choose Your Destination
      </h2>
      <p className="text-gray-700 text-center md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis,
        ducimus pariatur fuga non quos praesentium maiores natus.
      </p>
      <div className="w-full flex flex-col items-center gap-5 text-white">
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 items-center gap-5">
          <div
            style={{
              background: `url(${Maldives})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Maldives
            </h4>
          </div>
          <div
            style={{
              background: `url(${Indonesia})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Indonesia
            </h4>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center gap-5">
          <div
            style={{
              background: `url(${Srilanka})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Srilanka
            </h4>
          </div>
          <div
            style={{
              background: `url(${America})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full md:col-span-2 col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              North America
            </h4>
          </div>
          <div
            style={{
              background: `url(${Kashmir})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Kashmir
            </h4>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-center gap-5">
          <div
            style={{
              background: `url(${Bangladesh})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full md:col-span-2 col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Bangladesh
            </h4>
          </div>
          <div
            style={{
              background: `url(${Bandarban})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-72 h-60 w-full md:col-span-3 col-span-1 rounded-xl content-center text-center"
          >
            <h4 className="text-2xl font-semibold text-shadow-lg text-shadow-black">
              Bandarban
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
