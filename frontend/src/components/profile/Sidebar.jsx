import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../features/auth/authApi";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", to: "/profile" },
    { name: "Favourites", to: "/profile/favourites" },
    // Add more links here
  ];
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout();
      navigate("/login");
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to logout");
      console.error(error);
    }
  };
  return (
    <div className="w-[100%] flex flex-col gap-10 md:gap-8 lg:gap-4  pr-4 ">
      {sidebarLinks.map((link, index) => (
        <Link
          key={index}
          className=" hover:text-blue-600 transition-all duration-300"
          to={link.to}
        >
          {link.name}
        </Link>
      ))}
      <button
        className="bg-zinc-900 text-white rounded w-[100%] text-center py-2 hover:bg-zinc-800 transition-all duration-300"
        to="/logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
