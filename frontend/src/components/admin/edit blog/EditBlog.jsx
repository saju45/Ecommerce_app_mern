import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "../../../features/blog/blogApi";
const EditBlog = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const { data, isSuccess } = useGetSingleBlogQuery(id);

  const [updateBlog] = useUpdateBlogMutation();

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("image", image);

      const response = await updateBlog({
        id,
        data: { title, description, image },
      });

      setLoading(false);
      toast.success(response.data.message);
      setTitle("");
      setDescription("");
      setImage(null);
      navigate("/admin-dashboard/blogs");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTitle(data?.blog?.title);
      setDescription(data?.blog?.description);
    }
  }, [isSuccess, data]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Blog</h1>
      <form
        className="bg-white p-6 shadow-md rounded-lg space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Product Name */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter product name"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter product description"
            rows="4"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="image"
            multiple
            accept="image/*"
            className="mt-1 block w-full text-gray-600"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Submit Button */}
        <div>
          {loading ? (
            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600">
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600"
            >
              Update blog
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
