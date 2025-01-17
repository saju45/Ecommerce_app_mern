import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Newsletter from "../../components/home/NewsLetter";
import ProductCard from "../../components/product/ProductCard";
import Sidebar from "../../components/shop/Sidebar";
import { useGetAllProductsQuery } from "../../features/products/productApi";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { data, isSuccess } = useGetAllProductsQuery(
    searchQuery ? searchQuery : ""
  );

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data);
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
            <a
              href="#"
              className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
            >
              1
            </a>
            <a
              href="#"
              className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
            >
              2
            </a>
            <a
              href="#"
              className="no-underline bg-[#088178] text-white px-5 py-3 rounded font-semibold inline-flex items-center"
            >
              3
            </a>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Shop;
