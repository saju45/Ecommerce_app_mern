import React, { useState } from "react";

const AllOrders = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      date: "2024-12-28",
      total: "$139.00",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-12-27",
      total: "$249.00",
      status: "Shipped",
    },
    {
      id: 3,
      customer: "Alice Johnson",
      date: "2024-12-26",
      total: "$89.00",
      status: "Delivered",
    },
    {
      id: 4,
      customer: "Bob Brown",
      date: "2024-12-25",
      total: "$199.00",
      status: "Canceled",
    },
  ]);

  // Handle status change
  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

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
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-4 text-gray-600">{order.id}</td>
                <td className="p-4 text-gray-600">{order.customer}</td>
                <td className="p-4 text-gray-600">{order.date}</td>
                <td className="p-4 text-gray-600">{order.total}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Delivered"
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
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Canceled">Canceled</option>
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
