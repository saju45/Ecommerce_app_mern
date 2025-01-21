import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useClearCartMutation,
  useGetCartDataQuery,
} from "../../features/cart/cartApi";
import { useAddOrderMutation } from "../../features/order/orderApi";
const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash on delivery");
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const { data: cartItems, isSuccess } = useGetCartDataQuery();
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const [clearCart] = useClearCartMutation();
  const navigate = useNavigate();

  const subtotal = cartItems?.items?.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shipping = 15;
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
    try {
      // Validation
      if (
        !name ||
        !email ||
        !shippingAddress.address ||
        !shippingAddress.city ||
        !shippingAddress.postalCode ||
        !shippingAddress.country
      ) {
        toast.error("Please fill all required fields");
        return;
      }
      const response = await addOrder({
        products: cartItems?.items,
        name,
        email,
        paymentMethod,
        shippingAddress,
        cartItems,
        price: subtotal,
        shippingPrice: shipping,
        totalPrice: total,
      });

      const cartRespose = await clearCart();
      console.log("cart response : ", cartRespose);

      console.log("response : ", response);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Information */}
          <div className="p-4 border rounded">
            <h2 className="text-lg font-semibold mb-4">User Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="p-4 border rounded">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="123 Main St"
                  value={shipping.address}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      address: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded p-2"
                    placeholder="City"
                    value={shipping.city}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        city: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded p-2"
                    placeholder="ZIP Code"
                    value={shipping.postalCode}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        postalCode: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded p-2"
                  placeholder="Country"
                  value={shipping.country}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      country: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="p-4 border rounded">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="space-y-2">
              {["cash on delivery"].map((method) => (
                <div key={method} className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="mr-2"
                  />
                  <label className="text-sm">{method}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {isSuccess && (
            <div className="p-4 border rounded space-y-4">
              {cartItems?.items?.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="space-y-1">
                <div className="flex justify-between">
                  <p className="text-sm">Subtotal</p>
                  <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Shipping</p>
                  <p className="text-sm font-medium">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Tax</p>
                  <p className="text-sm font-medium">${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-semibold">
                  <p className="text-lg">Total</p>
                  <p className="text-lg">${total.toFixed(2)}</p>
                </div>
              </div>

              {isLoading ? (
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  <span
                    className="spinner-border spinner-border-sm mr-3"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Processing...
                </button>
              ) : (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Place Order
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
