import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleGoToShop = () => {
    navigate("/shop"); // Update with the actual route for your shop page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 p-4">
      <div className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18M9 3v18m6-18v18M3 3l3 6h12l3-6m-6 9h6m-12 0H3m6 0h6"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button
          onClick={handleGoToShop}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Go to Shop
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
