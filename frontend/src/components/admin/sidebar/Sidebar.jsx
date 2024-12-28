/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggleSidebar, showSidebar }) => {
  return (
    <div
      className={`${
        showSidebar ? "absolute h-screen" : "hidden  w-64"
      } md:flex flex-col bg-white shadow-md`}
    >
      <div className="flex items-center md:hidden justify-end px-6 py-4">
        <button onClick={onToggleSidebar} className="p-2">
          <RxCross2 />
        </button>
      </div>
      <div className="p-6 text-lg font-bold text-gray-800 border-b">
        Admin Panel
      </div>
      <nav className="flex-grow p-4 space-y-4">
        <Link
          to="/admin-dashboard"
          className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
        >
          Dashboard
        </Link>
        <Link
          to="/admin-dashboard/products"
          className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
        >
          Products
        </Link>
        <Link
          to="/admin-dashboard/oreders"
          className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
        >
          Orders
        </Link>
        <Link
          to="/admin-dashboard/customers"
          className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
        >
          Customers
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
