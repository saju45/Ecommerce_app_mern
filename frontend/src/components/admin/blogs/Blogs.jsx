import { useGetAllBlogsQuery } from "../../../features/blog/blogApi";
import Loading from "../../ui/Loading";
import ProductNotFound from "../../ui/ProductNotFound";
import AdminBlogCard from "./AdminBlogCard";
const Blogs = () => {
  const { data: blogs, isLoading, isError, error } = useGetAllBlogsQuery();

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = (
      <div className="flex items-center justify-center text-2xl py-10 font-semibold text-black">
        {error}
      </div>
    );
  } else if (!isLoading && !isError && blogs?.length === 0) {
    content = <ProductNotFound />;
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 md:px-20">
        {blogs?.map((product) => (
          <AdminBlogCard key={product._id} blog={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">All Blogs</h2>
        <p className="text-gray-600">you can edit or delete</p>
      </div>

      {content}
    </div>
  );
};

export default Blogs;
