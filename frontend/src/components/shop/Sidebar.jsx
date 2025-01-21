import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../features/categories/categoryApi.js";
import {
  brandSelected,
  categorySelected,
  priceUpdate,
  regionUpdated,
  removeCategory,
  removePrice,
} from "../../features/filter/filterSlice.js";
import {
  useGetBrandsByCategoryQuery,
  useGetShippingRegionsQuery,
} from "../../features/products/productApi.js";
const Sidebar = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [shippingAreas, setShippingAres] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterItems = useSelector((state) => state.filter);

  const { data: brandsData, isSuccess: brandsIsSuccess } =
    useGetBrandsByCategoryQuery(filterItems.category);
  const { data: shippingRegionsData, isSuccess: shippingRegionsIsSuccess } =
    useGetShippingRegionsQuery();

  useEffect(() => {
    if (selectedCategory) {
      dispatch(categorySelected(selectedCategory));
      navigate(`/shop?category=${selectedCategory}`);
      dispatch(brandSelected(""));
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

  useEffect(() => {
    if (brandsIsSuccess && brandsData) {
      setBrands(brandsData);
    }
  }, [brandsIsSuccess, brandsData]);

  useEffect(() => {
    if (shippingRegionsIsSuccess && shippingRegionsData) {
      setShippingAres(shippingRegionsData);
    }
  }, [shippingRegionsIsSuccess, shippingRegionsData]);
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
        {brands?.map((brnd, index) => (
          <label key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => {
                setBrand(e.target.checked ? brnd : "");
                dispatch(brandSelected(e.target.checked ? brnd : ""));
              }}
              checked={brand === brnd}
            />
            {brnd}
          </label>
        ))}
      </div>

      {/* Shipped From Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Shipped From</h3>
        {shippingAreas?.map((location) => (
          <label key={location} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => {
                dispatch(regionUpdated(e.target.checked ? location : ""));
              }}
              checked={filterItems.region === location}
            />
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
