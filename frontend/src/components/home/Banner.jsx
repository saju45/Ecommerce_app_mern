const Banner = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center bg-cover bg-center w-full h-[40vh]  text-white"
      style={{ backgroundImage: `url("images/banner/b2.jpg")` }}
    >
      <h4 className="text-sm">Repair Service</h4>
      <h2 className="text-3xl font-bold">
        Up to <span className="text-red-500">70% Off </span> - All t-shirts &
        Accessories
      </h2>
      <button className="px-4 py-2 bg-slate-100 text-black mt-3 rounded hover:bg-green-800 hover:text-white transition-all duration-300">
        Explore more
      </button>
    </div>
  );
};

export default Banner;
