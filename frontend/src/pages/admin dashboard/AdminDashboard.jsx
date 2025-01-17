import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar/Sidebar";

import useDebounce from "../../utils/debounce.js";
const AdminDashboard = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const toggleSidebar = () => {
    setShowSideBar(!showSidebar);
  };

  useEffect(() => {
    if (debouncedQuery) {
      navigate(`/admin-dashboard/products?search=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}

      <Sidebar onToggleSidebar={toggleSidebar} showSidebar={showSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Navigation */}
        <header className="flex items-center justify-evenly  md:justify-between p-4 bg-white shadow-sm">
          <div className="flex items-center  md:hidden" onClick={toggleSidebar}>
            <IoMdMenu />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              className="hidden md:block p-2 rounded-md border border-gray-300"
            />
            <button
              className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={() => navigate("/admin-dashboard/addProduct")}
            >
              Add Product
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
