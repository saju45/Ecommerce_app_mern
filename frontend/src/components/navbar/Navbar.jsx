import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../features/auth/authApi";
import { useGetCartDataQuery } from "../../features/cart/cartApi";
import SearchBar from "./Searchbar";

const Navbar = () => {
  const [cartData, setCartData] = useState([]);

  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "Blog", to: "/blog" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const { data: cartDataQuery, isSuccess } = useGetCartDataQuery();
  const [logout] = useLogoutMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logout();

      localStorage.clear();
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const subTotal = cartData?.reduce((amout, item) => {
    return amout + item.quantity * item.price;
  }, 0);

  useEffect(() => {
    if (isSuccess && cartDataQuery) {
      setCartData(cartDataQuery?.items);
    }
  }, [isSuccess, cartDataQuery]);

  return (
    <div className="navbar  bg-[#E3E6F3] px-0  md:px-10 border-b border-gray-300 z-50 fixed ">
      <div className="flex-1" onClick={() => navigate("/")}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className=" md:flex-none">
        <SearchBar />
        <ul className="hidden md:flex gap-4 mr-5">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              {link.name}
            </Link>
          ))}
        </ul>
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartData?.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartData?.length} Items
                </span>
                <span className="text-info">Subtotal: ${subTotal}</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigate("/cart")}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" md:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link
              to="/profile"
              className=" p-1 text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Profile
            </Link>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className=" p-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <button
                className="py-2 px-4 rounded bg-black text-white hover:bg-blue-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </ul>
          <ul
            tabIndex={0}
            className=" hidden md:block  menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            {isLoggedIn ? (
              <button className="ml-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="ml-2">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
