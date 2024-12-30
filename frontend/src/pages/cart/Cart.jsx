import axios from "axios";
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  const handleRemovedCartData = async (productid) => {
    try {
      const response = await axios.put(
        `${backendLink}/cart/removeCartData`,
        {},
        {
          withCredentials: true,
          headers: {
            productid,
          },
        }
      );

      toast.success(response.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`${backendLink}/cart/getCartData`, {
          withCredentials: true,
        });

        setCartData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartData();
  }, [backendLink]);

  return (
    <div>
      <div
        id="page-header"
        className="bg-[url('/images/about/banner.png')] bg-cover bg-no-repeat w-full h-[45vh] flex justify-center items-center text-center flex-col p-4"
      >
        <h2 className="text-white text-3xl font-bold">#let's_talk</h2>
        <p className="text-white text-lg mt-2">
          LEAVE A MESSAGE, We love to hear form yo
        </p>
      </div>

      <div id="cart" className="overflow-x-auto mt-10 px-5 md:px-20 ">
        <table className="w-full border-collapse table-fixed whitespace-nowrap">
          <thead className="border-y border-gray-300">
            <tr>
              <th className="font-bold text-sm py-4">REMOVE</th>
              <th className="font-bold text-sm py-4">IMAGE</th>
              <th className="font-bold text-sm py-4">PRODUCT</th>
              <th className="font-bold text-sm py-4">PRICE</th>
              <th className="font-bold text-sm py-4">QUANTITY</th>
              <th className="font-bold text-sm py-4">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((item, index) => (
              <tr key={index}>
                <td
                  className="w-24 text-center text-sm py-4"
                  onClick={() => handleRemovedCartData(item?.productId)}
                >
                  <FaTimesCircle />
                </td>
                <td className="w-36 text-center text-sm py-4">
                  <img
                    src={item?.image}
                    alt="Product"
                    className="w-[80px] h-full object-cover"
                  />
                </td>
                <td className="w-64 text-center text-sm py-4">{item?.name}</td>
                <td className="w-36 text-center text-sm py-4">
                  ${item?.price}
                </td>
                <td className="w-36 text-center text-sm py-4">
                  <input
                    type="text"
                    className="w-16 px-4 py-2 border border-gray-300"
                    placeholder="1"
                    value={item?.quantity}
                  />
                </td>
                <td className="w-36 text-center text-sm py-4">$118.09 </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          id="card-add"
          className="flex flex-col md:flex-row flex-wrap justify-between"
        >
          <div id="coupon" className="w-full md:w-1/2 mb-8">
            <h3 className="pb-4">Coupon Code</h3>
            <div className="flex">
              <input
                type="text"
                className="p-2.5 w-3/5 mr-2 border border-gray-300 outline-none"
                placeholder="Enter coupon code"
              />
              <button className="bg-green-700 text-white px-5 py-3">
                Apply Coupon
              </button>
            </div>
          </div>

          <div
            id="subtotal"
            className="w-full md:w-1/2 border border-gray-300 p-8"
          >
            <h3 className="pb-4">Order Summary</h3>
            <table className="w-full border-collapse mb-5">
              <tbody>
                <tr>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    Subtotal
                  </td>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    $200
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    Shippin fee
                  </td>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    free
                  </td>
                </tr>
                <tr>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    Total
                  </td>
                  <td className="w-1/2 border border-gray-300 p-2.5 text-sm">
                    $220
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-green-700 text-white px-5 py-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
