import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../features/categories/categoryApi.js";
import {
  categorySelected,
  priceUpdate,
  removeCategory,
  removePrice,
} from "../../features/filter/filterSlice.js";
const Sidebar = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory) {
      dispatch(categorySelected(selectedCategory));
      navigate(`/shop?category=${selectedCategory}`);
    } else {
      dispatch(removeCategory());
      navigate("/shop");
    }

    if (minPrice && maxPrice) {
      dispatch(priceUpdate({ minPrice, maxPrice }));
      navigate(`/shop?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    } else {
      dispatch(removePrice());
      navigate("/shop");
    }
  }, [selectedCategory, minPrice, maxPrice, navigate, dispatch]);

  return (
    <div className="w-64 p-4 border-r border-gray-200">
      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <select
          className="w-full p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories?.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        {["Arpa", "Kids World", "Jim & Jolly", "Farlin"].map((brand) => (
          <label key={brand} className="flex items-center mb-1">
            <input type="checkbox" className="mr-2" />
            {brand}
          </label>
        ))}
      </div>

      {/* Shipped From Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Shipped From</h3>
        {["Dhaka", "Khulna", "Chattogram", "Rajshahi"].map((location) => (
          <label key={location} className="flex items-center mb-1">
            <input type="checkbox" className="mr-2" />
            {location}
          </label>
        ))}
      </div>

      {/* Price Section */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="text"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-2/5 p-2 border rounded mb-2"
        />
        <span className="w-1/5">-</span>
        <input
          type="text"
          placeholder="Max"
          className="w-2/5 p-2 border rounded"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
