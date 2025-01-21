import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../../features/user/userApi";

const CustomerList = () => {
  // Sample data for customers
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const name = searchParams.get("name") || "";

  // Fetch all users
  const { data: allUsers, isSuccess } = useGetAllUserQuery({
    page,
    keyword: name,
  });

  const [deleteUser] = useDeleteUserMutation();

  const handleSearch = (event) => {
    const { name, value } = event.target;
    setSearchTerm(value);

    if (event.target.value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }

    setSearchParams(searchParams); // Update the URL
  };
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await deleteUser(userId);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (isSuccess && allUsers) {
      setCustomers(allUsers?.users);
      setTotalPages(allUsers?.totalPages);
      setPage(allUsers?.currentPage);
    }
  }, [isSuccess, allUsers]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Customer List</h2>
          <input
            type="text"
            name="name"
            placeholder="Search customers..."
            className="p-2 border border-gray-300 rounded-md w-64"
            value={searchTerm}
            onChange={handleSearch}
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
                <tr key={customer._id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {customer._id}
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
                    {customer.orders?.length}
                  </td>
                  <td className="border border-gray-200 p-3 text-gray-800">
                    {/* <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button> */}
                    <button
                      className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleDelete(customer?._id)}
                    >
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
            Showing {page} to {totalPages} of {customers?.length} entries
          </p>
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
