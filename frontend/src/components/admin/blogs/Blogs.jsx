import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminBlogCard from "./AdminBlogCard";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const backendLick = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendLick}/blog/fetchAllBlogs`);
        console.log(response);

        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, [backendLick]);
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">All Blogs</h2>
        <p className="text-gray-600">you can edit or delete</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 md:px-20">
        {blogs?.map((product) => (
          <AdminBlogCard key={product._id} blog={product} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
