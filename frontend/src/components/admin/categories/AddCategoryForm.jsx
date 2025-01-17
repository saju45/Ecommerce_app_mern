import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../features/categories/categoryApi";
import { removeCategory } from "../../../features/categories/categorySlice";
const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [addCategory, { isLoading }] = useAddCategoryMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategory.id) {
        const response = await updateCategory({
          id: selectedCategory.id,
          data: { name: categoryName },
        });

        dispatch(removeCategory());
        setCategoryName("");
        toast.success(response.data.message);
      } else {
        const response = await addCategory({ name: categoryName });
        setCategoryName("");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  useEffect(() => {
    if (selectedCategory.id) {
      setCategoryName(selectedCategory.name);
    } else {
      setCategoryName("");
    }
  }, [selectedCategory]);
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        required
      />
      {isLoading || updateLoading ? (
        <button
          type="submit"
          disabled
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          {selectedCategory.id ? "Update Category" : "Add Category"}
        </button>
      )}
    </form>
  );
};

export default AddCategoryForm;
