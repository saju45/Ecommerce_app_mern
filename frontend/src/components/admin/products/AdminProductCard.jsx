import { Link } from "react-router-dom";
const AdminProductCard = () => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition p-4">
      <div className="flex justify-center mb-4">
        <img
          src="/images/products/f1.jpg"
          alt="Cotton Astronaut T-shirt"
          className="h-40"
        />
      </div>
      <h3 className="text-sm text-gray-600">adidas</h3>
      <h4 className="text-lg font-semibold text-gray-800">
        Cotton Astronaut T-shirt
      </h4>
      <div className="flex items-center text-yellow-400 text-sm mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.92a1 1 0 00.95.69h5.181c.969 0 1.371 1.24.588 1.81l-4.193 3.05a1 1 0 00-.364 1.118l1.6 4.92c.3.921-.755 1.688-1.538 1.118l-4.193-3.05a1 1 0 00-1.176 0l-4.193 3.05c-.783.57-1.838-.197-1.538-1.118l1.6-4.92a1 1 0 00-.364-1.118L2.34 9.347c-.783-.57-.381-1.81.588-1.81h5.181a1 1 0 00.95-.69l1.6-4.92z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.92a1 1 0 00.95.69h5.181c.969 0 1.371 1.24.588 1.81l-4.193 3.05a1 1 0 00-.364 1.118l1.6 4.92c.3.921-.755 1.688-1.538 1.118l-4.193-3.05a1 1 0 00-1.176 0l-4.193 3.05c-.783.57-1.838-.197-1.538-1.118l1.6-4.92a1 1 0 00-.364-1.118L2.34 9.347c-.783-.57-.381-1.81.588-1.81h5.181a1 1 0 00.95-.69l1.6-4.92z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.92a1 1 0 00.95.69h5.181c.969 0 1.371 1.24.588 1.81l-4.193 3.05a1 1 0 00-.364 1.118l1.6 4.92c.3.921-.755 1.688-1.538 1.118l-4.193-3.05a1 1 0 00-1.176 0l-4.193 3.05c-.783.57-1.838-.197-1.538-1.118l1.6-4.92a1 1 0 00-.364-1.118L2.34 9.347c-.783-.57-.381-1.81.588-1.81h5.181a1 1 0 00.95-.69l1.6-4.92z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.92a1 1 0 00.95.69h5.181c.969 0 1.371 1.24.588 1.81l-4.193 3.05a1 1 0 00-.364 1.118l1.6 4.92c.3.921-.755 1.688-1.538 1.118l-4.193-3.05a1 1 0 00-1.176 0l-4.193 3.05c-.783.57-1.838-.197-1.538-1.118l1.6-4.92a1 1 0 00-.364-1.118L2.34 9.347c-.783-.57-.381-1.81.588-1.81h5.181a1 1 0 00.95-.69l1.6-4.92z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.92a1 1 0 00.95.69h5.181c.969 0 1.371 1.24.588 1.81l-4.193 3.05a1 1 0 00-.364 1.118l1.6 4.92c.3.921-.755 1.688-1.538 1.118l-4.193-3.05a1 1 0 00-1.176 0l-4.193 3.05c-.783.57-1.838-.197-1.538-1.118l1.6-4.92a1 1 0 00-.364-1.118L2.34 9.347c-.783-.57-.381-1.81.588-1.81h5.181a1 1 0 00.95-.69l1.6-4.92z" />
        </svg>
      </div>
      <p className="mt-2 text-lg text-gray-900 font-semibold">$78</p>
      <div className="flex justify-between mt-4">
        <Link
          to="/admin-dashboard/editProduct/12"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 "
        >
          Edit
        </Link>
        <button className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
