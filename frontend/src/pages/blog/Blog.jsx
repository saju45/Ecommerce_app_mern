import { useEffect, useState } from "react";
import BlogCard from "../../components/blog/BlogCard";
import Newsletter from "../../components/home/NewsLetter";
import { useGetAllBlogsQuery } from "../../features/blog/blogApi";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, isSuccess } = useGetAllBlogsQuery({ page, limit: 5 });

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    if (isSuccess && data?.blogs) {
      setBlogs(data?.blogs);
      setTotalPages(data?.totalPages);
    }
  }, [isSuccess, data]);

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

      {totalPages > 1 && (
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
      )}
      <Newsletter />
    </div>
  );
};

export default Blog;
