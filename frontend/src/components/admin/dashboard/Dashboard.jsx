import { useEffect, useState } from "react";
import {
  useGetAllOrdersQuery,
  useGetRecentOrdersQuery,
} from "../../../features/order/orderApi";
import { useGetProductsQuery } from "../../../features/products/productApi";

const Dashboard = () => {
  const [totalSales, setTotalSales] = useState(0);
  const { data: products, isSuccess } = useGetProductsQuery();
  const { data: orders, isSuccess: orderIsSuccess } = useGetAllOrdersQuery();
  const { data: recentOrders, isSuccess: recentOrderIsSuccess } =
    useGetRecentOrdersQuery();

  useEffect(() => {
    if (orderIsSuccess && orders) {
      setTotalSales(
        orders.reduce((total, order) => total + order.totalPrice, 0)
      );
    }
  }, [orderIsSuccess, orders]);
  return (
    <>
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-900">${totalSales}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">
            {orderIsSuccess && orders?.length}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Products
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            {isSuccess && products?.length}
          </p>
        </div>
      </div>

      {/* Recent Orders */}
      {recentOrderIsSuccess && recentOrders && (
        <div className="bg-white p-4 shadow rounded-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Recent Orders
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b text-left p-2 text-gray-600">
                  Order ID
                </th>
                <th className="border-b text-left p-2 text-gray-600">
                  Customer
                </th>
                <th className="border-b text-left p-2 text-gray-600">Amount</th>
                <th className="border-b text-left p-2 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders?.map((order) => (
                <tr key={order?._id}>
                  <td className="border-b p-2">#{order?._id}</td>
                  <td className="border-b p-2">{order?.user?.name}</td>
                  <td className="border-b p-2">${order?.totalPrice}</td>
                  <td className="border-b p-2 text-green-600">
                    {order?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Dashboard;
