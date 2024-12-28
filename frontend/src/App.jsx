import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddProductPage from "./components/admin/add product/AddProduct";
import Customers from "./components/admin/customers/Customers";
import Dashboard from "./components/admin/dashboard/Dashboard";
import EditProduct from "./components/admin/edit product/EditProduct";
import Orders from "./components/admin/orders/Orders";
import Products from "./components/admin/products/Products";
import MainLayout from "./layout/MainLayout";
import OtherLayout from "./layout/OtherLayout";
import About from "./pages/about/About";
import AdminDashboard from "./pages/admin dashboard/AdminDashboard";
import AdminLogin from "./pages/Admin login/AdminLogin";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDescription from "./pages/product details/Description";
import Shop from "./pages/Shop/Shop";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Route>

        <Route element={<OtherLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin-dashboard/products" element={<Products />} />
            <Route path="/admin-dashboard/oreders" element={<Orders />} />
            <Route path="/admin-dashboard/customers" element={<Customers />} />
            <Route
              path="/admin-dashboard/addProduct"
              element={<AddProductPage />}
            />
            <Route
              path="/admin-dashboard/editProduct/:id"
              element={<EditProduct />}
            />
          </Route>
          <Route path="*" element={() => <h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
