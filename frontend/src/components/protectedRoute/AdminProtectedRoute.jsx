/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  if (!isLoggedIn || user?.role !== "admin") {
    return <Navigate to="/admin-login" />;
  }
  return children;
};
export default AdminProtectedRoute;
