/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useDeleteFromCartMutation,
  useUpdateCartQuantityMutation,
} from "../../features/cart/cartApi";
import useDebounce from "../../utils/debounce";

const CartCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const subTotal = item?.price * item?.quantity;
  const [updateCartQuantity] = useUpdateCartQuantityMutation();

  const [deleteFromCart] = useDeleteFromCartMutation();

  const handleRemovedCartData = async (productid) => {
    try {
      const response = await deleteFromCart(productid);

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const debouncedValue = useDebounce(quantity, 2000);

  const handleChangeQuantity = async (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    const updateQuantity = async () => {
      try {
        const response = await updateCartQuantity({
          productid: item.productId,
          quantity: debouncedValue,
        });

        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    };
    if (item.quantity != debouncedValue) {
      updateQuantity();
    }
  }, [debouncedValue, item, updateCartQuantity]);

  return (
    <tr>
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
      <td className="w-36 text-center text-sm py-4">${item?.price}</td>
      <td className="w-36 text-center text-sm py-4">
        <input
          type="text"
          className="w-16 px-4 py-2 border border-gray-300"
          placeholder="1"
          value={quantity}
          onChange={handleChangeQuantity}
        />
      </td>
      <td className="w-36 text-center text-sm py-4">${subTotal} </td>
    </tr>
  );
};

export default CartCard;
