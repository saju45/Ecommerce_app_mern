import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Newsletter from "../../components/home/NewsLetter";
import ProductCard from "../../components/product/ProductCard";
import Sidebar from "../../components/shop/Sidebar";
import { useGetAllProductsQuery } from "../../features/products/productApi";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [searchParams] = useSearchParams();
  // const searchQuery = searchParams.get("search");
  // const categoryQuery = searchParams.get("category");
  // const minPrice = searchParams.get("minPrice");
  // const maxPrice = searchParams.get("maxPrice");

  const filterItems = useSelector((state) => state.filter);

  const { data, isSuccess } = useGetAllProductsQuery({
    ...filterItems,
    page: page,
    limit: 9,
  });

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    if (isSuccess && data?.products) {
      setProducts(data?.products);
      setTotalPages(data?.totalPages);
    }
  }, [isSuccess, data]);

  return (
    <div>
      {/* Page Header Section */}
      <div
        id="page-header"
        className="bg-[url('/images/banner/b1.jpg')] bg-cover bg-no-repeat w-full h-[40vh] flex justify-center items-center text-center flex-col p-4"
      >
        <h2 className="text-white text-3xl font-bold">#StayHome</h2>
        <p className="text-white text-lg">
          Save more with counpons & up to 70% off!
        </p>
      </div>

      <div className="flex">
        <Sidebar />
        <div>
          {/* Shop Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-20 px-5 md:px-10">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination Section */}
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
      </div>

      <Newsletter />
    </div>
  );
};

export default Shop;
