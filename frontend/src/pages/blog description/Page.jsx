import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAddToFavouriteMutation,
  useGetSingleBlogQuery,
  useRemovedFromFavouriteMutation,
} from "../../features/blog/blogApi";
const BlogDescription = () => {
  const [blog, setBlog] = useState({});
  const [favourites, setFavourites] = useState(false);

  const { id } = useParams();
  const { data: blogData, isSuccess } = useGetSingleBlogQuery(id);
  const [addToFavourite] = useAddToFavouriteMutation();
  const [removedFromFavourite] = useRemovedFromFavouriteMutation();

  const handleFavourite = async () => {
    if (favourites) {
      try {
        const response = await removedFromFavourite(id);

        setFavourites(false);
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    } else {
      try {
        const response = await addToFavourite(id);

        setFavourites(true);
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setBlog(blogData.blog);
      console.log(blogData);

      const isFavourite = blogData.blog.favouriteBlogByUser.find(
        (id) => id.toString() === id
      );

      if (isFavourite) {
        setFavourites(true);
      } else {
        setFavourites(false);
      }
    }
  }, [isSuccess, blogData]);

  return (
    <div className="pt-20 px-10 md:px-20">
      <div className=" w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold w-5/6">{blog?.title}</h1>
        <div className="w-1/6 text-2xl lg:text-3xl flex justify-end">
          <button onClick={handleFavourite}>
            {favourites ? (
              <FaHeart className="hover:cursor-pointer text-red-400" />
            ) : (
              <FaRegHeart className="hover:cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      <img
        src={blog?.image}
        alt={blog?.title}
        className="mt-4 w-full h-[400px] object-cover rounded"
      />
      <p className="mt-4">{blog?.description}</p>
    </div>
  );
};

export default BlogDescription;
