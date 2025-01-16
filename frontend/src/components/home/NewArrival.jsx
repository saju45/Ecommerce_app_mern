/* eslint-disable no-unused-vars */
import { useGetNewArrivalsQuery } from "../../features/products/productApi";
import ProductCard from "../product/ProductCard";
import Loading from "../ui/Loading";
import ProductError from "../ui/ProductError";
import ProductNotFound from "../ui/ProductNotFound";
const NewArrivals = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetNewArrivalsQuery();

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <ProductError error={error} />;
  } else if (!isLoading && !isError && products?.length === 0) {
    content = <ProductNotFound />;
  } else if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 md:px-20">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
        <p className="text-gray-600">Summer Collection new morden design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 md:px-20">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
