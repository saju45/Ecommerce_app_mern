import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../../features/order/orderApi";

const AllOrders = () => {
  // Sample orders data
  const [orders, setOrders] = useState([]);

  // Fetch orders from the API
  const { data: fetchedOrders, isSuccess } = useGetAllOrdersQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );

    try {
      const response = await updateOrderStatus({
        id,
        data: { status: newStatus },
      });
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (isSuccess && fetchedOrders) {
      setOrders(fetchedOrders);
    }
  }, [isSuccess, fetchedOrders]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Orders</h1>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 font-medium text-gray-700">Order ID</th>
              <th className="p-4 font-medium text-gray-700">Customer</th>
              <th className="p-4 font-medium text-gray-700">Date</th>
              <th className="p-4 font-medium text-gray-700">Total</th>
              <th className="p-4 font-medium text-gray-700">Status</th>
              <th className="p-4 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-gray-600">{order._id}</td>
                <td className="p-4 text-gray-600">{order.user.name}</td>
                <td className="p-4 text-gray-600">
                  {moment(order.createdAt).format("YYYY-MM-DD")}
                </td>
                <td className="p-4 text-gray-600">{order.toatalPrice}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Canceled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
