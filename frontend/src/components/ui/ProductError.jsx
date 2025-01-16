const ProductError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      {/* Error Icon */}
      <div className="text-red-500 text-7xl mb-6 animate-pulse">⚠️</div>

      {/* Error Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Oops! Something Went Wrong
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-6">
        We encountered an error while fetching the product details. Please check
        your internet connection or try again later.
      </p>

      {/* Retry Button */}
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
        Retry Fetching Product
      </button>
    </div>
  );
};

export default ProductError;
