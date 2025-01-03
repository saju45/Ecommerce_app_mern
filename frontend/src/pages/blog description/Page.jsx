import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BlogDescription = () => {
  const [blog, setBlog] = useState({});
  const [favourites, setFavourites] = useState(false);

  const { id } = useParams();

  const backendLink = useSelector((state) => state.prod.link);

  const handleFavourite = async () => {
    if (favourites) {
      try {
        const response = await axios.put(
          `${backendLink}/blog/removeFromFavourite/${id}`,
          {},
          { withCredentials: true }
        );

        setFavourites(false);
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    } else {
      try {
        const response = await axios.put(
          `${backendLink}/blog/addToFavourite/${id}`,
          {},
          { withCredentials: true }
        );

        setFavourites(true);
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${backendLink}/blog//fetchSingleBlog/${id}`,
          {
            withCredentials: true,
          }
        );
        setBlog(response.data.blog);

        console.log(response);

        const isFavourite = response.data.blog.favouriteBlogByUser.find(
          (id) => id.toString() === id
        );

        if (isFavourite) {
          setFavourites(true);
        } else {
          setFavourites(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [backendLink, id]);

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
