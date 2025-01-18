import { useGetAllBlogsQuery } from "../../../features/blog/blogApi";
import Loading from "../../ui/Loading";
import ProductNotFound from "../../ui/ProductNotFound";
import AdminBlogCard from "./AdminBlogCard";

import { useEffect, useState } from "react";
const Blogs = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, isSuccess, isLoading, isError, error } = useGetAllBlogsQuery({
    page,
    limit: 5,
  });

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  useEffect(() => {
    if (isSuccess && data?.blogs) {
      setTotalPages(data?.totalPages);
    }
  }, [isSuccess, data]);
  //decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = (
      <div className="flex items-center justify-center text-2xl py-10 font-semibold text-black ">
        {error}
      </div>
    );
  } else if (!isLoading && !isError && data?.blogs?.length === 0) {
    content = <ProductNotFound />;
  } else if (!isLoading && !isError && data?.blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 md:px-20 mb-10">
        {data?.blogs?.map((product) => (
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
      <div
        id="pagination"
        className="text-center mb-6 flex flex-row items-center justify-center gap-4"
      >
        <button
          className="no-underline bg-[#088178] disabled:bg-[#A0C7C3] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center ${
                page === data?.currentPage
                  ? "border-2 border-white bg-green-500"
                  : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className="no-underline bg-[#088178] disabled:bg-[#A0C7C3] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
