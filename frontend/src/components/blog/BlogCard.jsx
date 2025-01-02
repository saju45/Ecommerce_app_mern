/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  gap-8 py-8  border-gray-200 px-10 md:px-20">
      <div className="w-full md:w-1/3">
        <div className="text-gray-300 text-6xl font-extrabold leading-none mb-[-10px]">
          {moment(blog?.createdAt).format("DD/MM")}
        </div>

        {/* Image Section */}
        <div className="">
          <img
            src={blog?.image}
            alt={blog?.title}
            className=" w-[100%] h-64 object-cover"
          />
        </div>
      </div>
      {/* Date Section */}

      {/* Blog Details Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-start">
        <h3 className="text-lg font-semibold text-black">{blog?.title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {blog?.description.slice(0, 120)}...{" "}
        </p>
        <Link
          to={`/blog/description/${blog?._id}`}
          className="text-sm font-bold text-black flex items-center mt-4 hover:text-[#088178] transition"
        >
          CONTINUE READING
          <span className="ml-2 h-[1px] w-12 bg-black block hover:bg-[#088178]"></span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
