import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../features/products/productApi";
const EditProduct = () => {
  const [product, setProduct] = useState({
    brand: "",
    sizes: [],
    name: "",
    price: "",
    rating: "",
    category: "",
    stock: "",
    description: "",
    images: [],
  });
  const [updateProduct] = useUpdateProductMutation();

  const [size, setSize] = useState("");

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { data, isSuccess } = useGetSingleProductQuery(id);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await updateProduct({ id, data: product }).unwrap();

      console.log(response);
      toast.success(response.message);
      navigate(`/admin-dashboard/products`);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      console.log(error);
    }
  };

  const handleChangeSize = (e) => {
    const sizesArr = e.target.value.split(",").map((s) => s.trim());
    setSize(e.target.value);
    setProduct({ ...product, sizes: sizesArr });
  };

  const handleChanged = (e) => {
    const { id, value } = e.target;
    if (id !== "sizes") {
      setProduct({ ...product, [id]: value });
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      setProduct(data);
      setSize(data.sizes.join(","));
    }
  }, [isSuccess, data]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg space-y-6"
      >
        {/* Product Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={product?.name}
            onChange={handleChanged}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Price and sizes */}

        <div className="flex gap-5">
          <div className="w-1/2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={product?.price}
              onChange={handleChanged}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="sizes"
              className="block text-sm font-medium text-gray-700"
            >
              Sizes
            </label>
            <input
              type="text"
              id="sizes"
              value={size}
              onChange={handleChangeSize}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter product coma separet size"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            value={product?.category}
            onChange={handleChanged}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter category"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            value={product?.stock}
            onChange={handleChanged}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter stock quantity"
            required
          />
        </div>
        {/* Product brand  and rating*/}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="brand"
              value={product?.brand}
              onChange={handleChanged}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter product brand name"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              value={product?.rating}
              onChange={handleChanged}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter product rating"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={product?.description}
            onChange={handleChanged}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          {loading ? (
            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600">
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600"
            >
              update Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
