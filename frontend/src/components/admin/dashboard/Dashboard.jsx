const Dashboard = () => {
  return (
    <>
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-900">$24,000</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">1,320</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Products
          </h3>
          <p className="text-2xl font-bold text-gray-900">250</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-4 shadow rounded-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b text-left p-2 text-gray-600">Order ID</th>
              <th className="border-b text-left p-2 text-gray-600">Customer</th>
              <th className="border-b text-left p-2 text-gray-600">Amount</th>
              <th className="border-b text-left p-2 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">#12345</td>
              <td className="border-b p-2">John Doe</td>
              <td className="border-b p-2">$120</td>
              <td className="border-b p-2 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="border-b p-2">#12346</td>
              <td className="border-b p-2">Jane Smith</td>
              <td className="border-b p-2">$340</td>
              <td className="border-b p-2 text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="border-b p-2">#12347</td>
              <td className="border-b p-2">Michael Lee</td>
              <td className="border-b p-2">$220</td>
              <td className="border-b p-2 text-red-600">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
