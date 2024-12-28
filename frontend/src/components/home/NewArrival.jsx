import ProductCard from "../product/ProductCard";

const NewArrivals = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
        <p className="text-gray-600">Summer Collection new morden design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 md:px-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
