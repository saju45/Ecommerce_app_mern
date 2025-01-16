/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteBlogMutation } from "../../../features/blog/blogApi";

const AdminBlogCard = ({ blog }) => {
  const [deleteBlog, { loading }] = useDeleteBlogMutation();
  const handleDelete = async (blogId) => {
    try {
      const response = await deleteBlog(blogId);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition p-4">
      <div className="flex justify-center mb-4">
        <img
          src={blog?.image}
          alt="Cotton Astronaut T-shirt"
          className="h-40"
        />
      </div>
      <h4 className="text-lg font-semibold text-gray-800">{blog?.title}</h4>

      <div className="flex justify-between mt-4">
        {loading ? (
          <Link className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ">
            deleting ...
          </Link>
        ) : (
          <Link
            to={`/admin-dashboard/editBlog/${blog?._id}`}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 "
          >
            Edit
          </Link>
        )}
        <button
          className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          onClick={() => handleDelete(blog?._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminBlogCard;
