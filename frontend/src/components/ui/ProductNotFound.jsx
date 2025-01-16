const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Icon Section */}
      <div className="text-red-500 text-6xl mb-4">❌</div>

      {/* Message Section */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Product Not Found
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-sm">
        Sorry, we could not find the product you are looking for.
      </p>
    </div>
  );
};

export default ProductNotFound;
