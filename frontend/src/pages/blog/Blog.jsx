import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/blog/BlogCard";
import Newsletter from "../../components/home/NewsLetter";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendLink}/blog/fetchAllBlogs`);
        setBlogs(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [backendLink]);

  return (
    <div>
      <div
        id="page-header"
        className="bg-[url('/images/banner/b19.jpg')] bg-cover bg-no-repeat w-full h-[45vh] flex justify-center items-center text-center flex-col p-4"
      >
        <h2 className="text-white text-3xl font-bold">#readmore</h2>
        <p className="text-white text-lg">
          read all case studies about our products
        </p>
      </div>
      {blogs?.map((blog) => (
        <BlogCard key={blog?._id} blog={blog} />
      ))}

      <div
        id="pagination"
        className="text-center mb-6 flex flex-row items-center justify-center gap-4"
      >
        <a
          href="#"
          className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
        >
          1
        </a>
        <a
          href="#"
          className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
        >
          2
        </a>
        <a
          href="#"
          className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
        >
          3
        </a>
      </div>
      <Newsletter />
    </div>
  );
};

export default Blog;
