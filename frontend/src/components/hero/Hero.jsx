const Hero = () => {
  return (
    <div className="h-[100vh] w-full bg-cover bg-[url('images/hero4.png')]  bg-[top_25%_right_0]  flex flex-col justify-center items-start">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div>
          <p className="text-sm text-gray-600 uppercase font-semibold tracking-wider">
            Trade-in-offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mt-2">
            Super Value deals <br />
            <span className="text-teal-600">On all products</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Save more with coupons &amp; up to 70% off!
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white font-medium rounded-md shadow-md hover:bg-teal-500 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
