import { useState } from "react";

const CustomerList = () => {
  // Sample data for customers
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      orders: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      orders: 3,
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael@example.com",
      phone: "555-123-4567",
      orders: 7,
    },
    {
      id: 4,
      name: "Sarah Connor",
      email: "sarah@example.com",
      phone: "444-888-9999",
      orders: 2,
    },
    {
      id: 5,
      name: "Chris Evans",
      email: "chris@example.com",
      phone: "222-333-4444",
      orders: 4,
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Customer List</h2>
          <input
            type="text"
            placeholder="Search customers..."
            className="p-2 border border-gray-300 rounded-md w-64"
          />
        </div>

        {/* Customer Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  ID
                </th>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  Name
                </th>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  Email
                </th>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  Phone
                </th>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  Orders
                </th>
                <th className="border border-gray-200 p-3 text-left text-gray-700 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer.id}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer.name}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer.email}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer.phone}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer.orders}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {/* <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button> */}
                    <button className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">
            Showing 1 to {customers.length} of {customers.length} entries
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
