import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAddProductMutation } from "../../../features/products/productApi";
const AddProductPage = () => {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesURLS, setImagesURLS] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [addProduct] = useAddProductMutation();

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    setImages([...images, ...files]);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImagesURLS([...imagesURLS, ...newImages]);
  };

  //reset from
  const reset = () => {
    setBrand("");
    setProductName("");
    setSize("");
    setPrice("");
    setRating("");
    setCategory("");
    setStock("");
    setDescription("");
    setImages([]);
    setImagesURLS([]);
  };

  const handleImageRemove = (index) => {
    setImagesURLS(imagesURLS.filter((_, i) => i !== index));
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //split sizez value by coma
    const sizesArr = size.split(",").map((s) => s.trim());
    console.log("sizeArr : ", sizesArr);

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("brand", brand);
      formData.append("name", productName);
      formData.append("sizes", JSON.stringify(sizesArr));
      formData.append("price", price);
      formData.append("rating", rating);
      formData.append("category", category);
      formData.append("stock", stock);
      formData.append("description", description);
      images.forEach((image) => formData.append("images", image));

      // // make request to backend server use rtk query
      const response = await addProduct(formData).unwrap();
      console.log("response : ", response);
      toast.success("Product added successfully!");
      navigate("/admin-dashboard/products");
      reset();
      setLoading(false);
    } catch (error) {
      console.log("error : ", error);
      toast.error("Failed to add product. Please try again!");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg space-y-6"
      >
        {/* Product Name */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Size
            </label>
            <input
              type="text"
              id="size"
              onChange={(e) => setSize(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter stock quantity"
            required
          />
        </div>
        {/* Product brand  and rating*/}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label
              htmlFor="productBrand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="productBrand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter product brand name"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-gray-600"
          />
          {/* Image Preview */}
          <div className="mt-4 flex flex-wrap gap-4">
            {imagesURLS?.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Product Preview ${index}`}
                  className="w-32 h-32 object-cover rounded-md shadow"
                />
                <button
                  type="button"
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
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
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
