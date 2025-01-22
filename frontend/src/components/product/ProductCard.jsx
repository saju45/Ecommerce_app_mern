/* eslint-disable react/prop-types */

import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAddToCartMutation,
  useGetCartDataQuery,
} from "../../features/cart/cartApi";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { data: cartData } = useGetCartDataQuery();
  const alreadyHasAddToCart = cartData?.items.findIndex(
    (pr) => pr.productId == product?._id
  );

  const [addToCart] = useAddToCartMutation();
  const handleAddToCart = async () => {
    if (isLoggedIn) {
      try {
        const response = await addToCart({
          productid: product?._id,
          quantity: 1,
          price: product?.price,
          name: product?.name,
          image: product?.images[0],
        });
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition p-4">
      <div className="flex justify-center mb-4">
        <img
          src={product?.images[0]}
          alt="Cotton Astronaut T-shirt"
          className="h-40"
        />
      </div>
      <h3 className="text-sm text-gray-600">{product?.brand}</h3>
      <h4
        className="text-lg font-semibold text-gray-800 cursor-pointer"
        onClick={() => navigate(`/product/${product?._id}`)}
      >
        {product?.name}
      </h4>
      <div className="flex items-center text-yellow-400 text-sm mt-1">
        {product?.rating >= 4 ? (
          <RiStarFill className="text-yellow-400" />
        ) : product?.rating >= 3 ? (
          <RiStarHalfLine className="text-yellow-400" />
        ) : (
          <RiStarLine className="text-yellow-400" />
        )}
      </div>
      <p className="mt-2 text-lg text-gray-900 font-semibold">
        ${product?.price}
      </p>
      {alreadyHasAddToCart > -1 ? (
        <div className="flex justify-end mt-4">
          <button
            className="p-2 bg-gray-500 text-white rounded-full hover:bg-green-400 transition"
            onClick={() => navigate("/cart")}
          >
            view
          </button>
        </div>
      ) : (
        <div className="flex justify-end mt-4" onClick={handleAddToCart}>
          <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
