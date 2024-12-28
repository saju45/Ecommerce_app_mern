const Feature = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-10 md:px-20 py-5">
      <div className="border border-green-400 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f1.png"
          alt="Free Shipping"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full inline-block font-medium">
          Free Shipping
        </p>
      </div>

      <div className="border border-green-400 rounded-lg shadow-md px-3 py-5 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f2.png"
          alt="Online Order"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-green-100 text-green-600 px-4 py-1 rounded-full inline-block font-medium">
          Online Order
        </p>
      </div>

      <div className="border border-green-400 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f3.png"
          alt="Save Money"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full inline-block font-medium">
          Save Money
        </p>
      </div>

      <div className="border border-green-400 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f4.png"
          alt="Promotions"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full inline-block font-medium">
          Promotions
        </p>
      </div>

      <div className="border border-.green-400 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f5.png"
          alt="Happy Sell"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full inline-block font-medium">
          Happy Sell
        </p>
      </div>

      <div className="border border-green-400 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
        <img
          src="/images/features/f1.png"
          alt="24/7 Support"
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="bg-green-100 text-green-600 px-4 py-1 rounded-full inline-block font-medium">
          24/7 Support
        </p>
      </div>
    </div>
  );
};

export default Feature;
