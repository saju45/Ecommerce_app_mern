import NewsLetter from "../../components/home/NewsLetter";
import ProductList from "../../components/home/ProductList";
const ProductDescription = () => {
  return (
    <div className="container mx-auto p-6 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Product Images */}
        <div>
          <img
            src="/images/products/f1.jpg"
            alt="Main Product"
            className="w-full h-auto object-cover mb-4"
          />
          <div className="flex gap-2">
            <img
              src="/images/products/f1.jpg"
              alt="Thumbnail 1"
              className="w-1/4 h-auto  object-cover cursor-pointer border border-gray-200"
            />
            <img
              src="/images/products/f1.jpg"
              alt="Thumbnail 2"
              className="w-1/4 h-auto object-cover cursor-pointer border border-gray-200"
            />
            <img
              src="/images/products/f1.jpg"
              alt="Thumbnail 3"
              className="w-1/4 h-auto object-cover cursor-pointer border border-gray-200"
            />
            <img
              src="/images/products/f1.jpg"
              alt="Thumbnail 4"
              className="w-1/4 h-auto object-cover cursor-pointer border border-gray-200"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className=" mt-4">
          <p className="text-sm text-gray-500 mb-4">Home / T-shirt</p>

          {/* Product Name */}
          <h1 className="text-2xl font-bold mb-4">Men's Fashion T-shirt</h1>
          {/* Product Price */}
          <p className="text-xl font-semibold text-gray-700 mb-4">$139.00</p>

          {/* Size Selector */}
          <div className="mb-4">
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Size
            </label>
            <select
              id="size"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">XL</option>
            </select>
          </div>

          {/* Quantity Input */}
          <div className="flex items-center gap-4 mb-6">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 p-2 border border-gray-300 rounded-md text-center"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700">
            Add to Cart
          </button>

          {/* Product Details */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Product Details</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              iure, officiis at ipsa molestias voluptas dolorum ut quis sapiente
              itaque dicta modi? Quo earum?
            </p>
          </div>
        </div>
      </div>

      <ProductList />
      <NewsLetter />
    </div>
  );
};

export default ProductDescription;
