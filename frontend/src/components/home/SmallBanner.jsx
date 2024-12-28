const SmallBanner = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap px-10 md:px-20">
        {/* Banner Box 1 */}
        <div
          className="flex flex-col justify-center items-start bg-cover bg-center p-5 min-w-[400px] h-[50vh]"
          style={{ backgroundImage: `url("images/banner/b17.jpg")` }}
        >
          <h4 className="text-white text-[20px] font-light">Special Offer</h4>
          <h2 className="text-white text-[28px] font-extrabold">
            Summer Collection
          </h2>
          <span className="text-white text-[14px] font-medium pb-4">
            Up to 70% off
          </span>
          <button className="px-4 py-2 text-white bg-transparent border border-white hover:bg-[#088178] hover:border-[#088178]">
            Shop Now
          </button>
        </div>

        {/* Banner Box 2 */}
        <div
          className="flex flex-col justify-center items-start bg-cover bg-center p-5 min-w-[400px] h-[50vh]"
          style={{ backgroundImage: `url("images/banner/b10.jpg")` }}
        >
          <h4 className="text-white text-[20px] font-light">Limited Time</h4>
          <h2 className="text-white text-[28px] font-extrabold">
            Exclusive Deals
          </h2>
          <span className="text-white text-[14px] font-medium pb-4">
            Don't miss out!
          </span>
          <button className="px-4 py-2 text-white bg-transparent border border-white hover:bg-[#088178] hover:border-[#088178]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap px-10 md:px-20 mt-8">
        {/* Banner Box 1 */}
        <div
          className="flex flex-col justify-center items-center md:items-start bg-cover bg-center w-full  md:w-[30%] h-[30vh] p-5 mb-5"
          style={{ backgroundImage: `url("images/banner/b7.jpg")` }}
        >
          <h2 className="text-white font-black text-[22px]">New Arrivals</h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">
            Limited Edition
          </h3>
        </div>

        {/* Banner Box 2 */}
        <div
          className="flex flex-col justify-center items-start bg-cover bg-center w-full  md:w-[30%] h-[30vh] p-5 mb-5"
          style={{ backgroundImage: `url("images/banner/b4.jpg")` }}
        >
          <h2 className="text-white font-black text-[22px]">Winter Sale</h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">
            Up to 50% Off
          </h3>
        </div>

        {/* Banner Box 3 */}
        <div
          className="flex flex-col justify-center items-start bg-cover bg-center w-full  md:w-[30%] h-[30vh] p-5 mb-5"
          style={{ backgroundImage: `url("images/banner/b18.jpg")` }}
        >
          <h2 className="text-white font-black text-[22px]">
            Exclusive Offers
          </h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">
            Shop Now
          </h3>
        </div>
      </div>
    </>
  );
};

export default SmallBanner;
