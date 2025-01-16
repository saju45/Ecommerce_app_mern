import { useEffect, useState } from "react";
import { useGetFavouriteBlogsQuery } from "../../features/blog/blogApi";
import BlogCard from "../blog/BlogCard";
const Favourites = () => {
  const [blogs, setBlogs] = useState([]);

  const { data: favouriteBlogs, isSuccess } = useGetFavouriteBlogsQuery();

  useEffect(() => {
    if (isSuccess) {
      setBlogs(favouriteBlogs);
    }
  }, [isSuccess, favouriteBlogs]);

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Fevaourites </h1>
      <div className="flex  flex-col gap-8 lg:gap-4">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col lg:flex-row gap-2 lg:gap-4"
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
