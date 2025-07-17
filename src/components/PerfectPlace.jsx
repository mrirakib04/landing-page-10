const PerfectPlace = () => {
  return (
    <div className="container flex md:flex-row flex-col items-center w-full gap-5 md:py-20 py-10 px-5">
      <div className="flex flex-col items-start gap-1 md:w-1/2 w-full">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          A Simple Perfect Place <br /> To Get Lost
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          omnis, ducimus pariatur fuga non quos praesentium maiores natus.
        </p>
        <ul className="px-4 list-disc md:mt-5 mt-2 text-gray-black">
          <li>
            Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam
            odio neque diam. Sociis erat at .
          </li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        </ul>
        <div>
          <button className="md:mt-5 mt-2 py-2 px-4 w-full bg-orange-600 hover:bg-black duration-300 rounded-md text-white flex items-center gap-1 text-center justify-center font-semibold">
            See More
          </button>
        </div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/nqye02H_H6I?si=-ZFF7PdvQDfhh8iM"
        className="md:max-w-1/2 max-w-full w-full object-cover md:h-96 h-60 rounded-2xl shadow-xl"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        rel="0"
      ></iframe>
    </div>
  );
};

export default PerfectPlace;
