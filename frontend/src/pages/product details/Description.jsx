import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NewsLetter from "../../components/home/NewsLetter";
import ProductCard from "../../components/product/ProductCard";
const ProductDescription = () => {
  const { id } = useParams();
  const backendLink = useSelector((state) => state.prod.link);
  const [product, setProduct] = useState({});
  const [imgPosition, setImgPosition] = useState(0);
  console.log(id);

  console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${backendLink}/products/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("response : ", response);

        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [backendLink, id]);

  return (
    <div className="container mx-auto p-6 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Product Images */}
        <div>
          <img
            src={product?.images && product?.images[imgPosition]}
            alt="Main Product"
            className="w-full h-auto object-cover mb-4"
          />
          <div className="flex gap-2">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Additional Product"
                className="w-1/4 h-auto  object-cover cursor-pointer border border-gray-200"
                onClick={() => setImgPosition(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className=" mt-4">
          <p className="text-sm text-gray-500 mb-4">{product?.brand}</p>

          {/* Product Name */}
          <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
          {/* Product Price */}
          <p className="text-xl font-semibold text-gray-700 mb-4">
            ${product?.price}
          </p>

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
              {product?.sizes?.map((size, index) => (
                <option key={index} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
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
              {product?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Related Products</h2>
          <p className="text-gray-600">Summer Collection new modern design</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default ProductDescription;
