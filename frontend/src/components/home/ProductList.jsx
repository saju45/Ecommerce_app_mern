import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const backendLick = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${backendLick}/products/fetchAllProduct`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [backendLick]);

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-600">Summer Collection new modern design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 md:px-20">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
