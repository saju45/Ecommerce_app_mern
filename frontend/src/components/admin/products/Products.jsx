import { useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../features/products/productApi";
import Loading from "../../ui/Loading";
import ProductNotFound from "../../ui/ProductNotFound.jsx";
import AdminProductCard from "./AdminProductCard";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery(searchQuery ? searchQuery : "");

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
  } else if (!isLoading && !isError && products?.length === 0) {
    content = <ProductNotFound />;
  } else if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10 md:px-20">
        {products?.map((product) => (
          <AdminProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600">Summer Collection new modern design</p>
      </div>
      {content}
    </div>
  );
};

export default Products;
