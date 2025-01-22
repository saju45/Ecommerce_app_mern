/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  if (!isLoggedIn || user?.role !== "user") {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
