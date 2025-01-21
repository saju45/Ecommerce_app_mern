import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddBlog from "./components/admin/add blog/AddBlog";
import AddProductPage from "./components/admin/add product/AddProduct";
import Blogs from "./components/admin/blogs/Blogs";
import Customers from "./components/admin/customers/Customers";
import Dashboard from "./components/admin/dashboard/Dashboard";
import EditBlog from "./components/admin/edit blog/EditBlog";
import EditProduct from "./components/admin/edit product/EditProduct";
import Orders from "./components/admin/orders/Orders";
import Products from "./components/admin/products/Products";
import Favourites from "./components/profile/Favourites";
import AdminProtectedRoute from "./components/protectedRoute/AdminProtectedRoute";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { login } from "./features/auth/authSlice.js";
import MainLayout from "./layout/MainLayout";
import OtherLayout from "./layout/OtherLayout";
import About from "./pages/about/About";
import AdminDashboard from "./pages/admin dashboard/AdminDashboard";
import AdminLogin from "./pages/Admin login/AdminLogin";
import BlogDescription from "./pages/blog description/Page";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDescription from "./pages/product details/Description";
import Profile from "./pages/profile/Page";
import Shop from "./pages/Shop/Shop";
import Signup from "./pages/signup/Signup";

import Categories from "./components/admin/categories/Categories";
import ProfileDashboard from "./components/profile/DashBoard";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const auth = localStorage.getItem("auth");

  const dispatch = useDispatch();

  if (auth) {
    dispatch(login());
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/description/:id" element={<BlogDescription />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/profile/favourites" element={<Favourites />} />
          </Route>
        </Route>

        <Route element={<OtherLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/admin-dashboard/products" element={<Products />} />
            <Route path="/admin-dashboard/blogs" element={<Blogs />} />

            <Route path="/admin-dashboard/oreders" element={<Orders />} />
            <Route path="/admin-dashboard/addBlog" element={<AddBlog />} />
            <Route path="/admin-dashboard/customers" element={<Customers />} />
            <Route
              path="/admin-dashboard/categories"
              element={<Categories />}
            />
            <Route
              path="/admin-dashboard/addProduct"
              element={<AddProductPage />}
            />
            <Route
              path="/admin-dashboard/editProduct/:id"
              element={<EditProduct />}
            />
            <Route
              path="/admin-dashboard/editBlog/:id"
              element={<EditBlog />}
            />
          </Route>
          <Route path="*" element={() => <h1>Page Not Found</h1>} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
