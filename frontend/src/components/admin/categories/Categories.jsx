import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../features/categories/categoryApi";
import {
  editCategory,
  removeCategory,
} from "../../../features/categories/categorySlice";
import AddCategoryForm from "./AddCategoryForm";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, isSuccess } = useGetAllCategoriesQuery();
  const dispatch = useDispatch();
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();

  const handleEditCategory = ({ name, id }) => {
    dispatch(editCategory({ name, id }));
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await deleteCategory(categoryId);
      dispatch(removeCategory());
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete category");
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      setCategories(data);
    }
  }, [isSuccess, data]);
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        {/* Add Category Form */}
        <AddCategoryForm />
        {/* Category List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">All Categories</h3>

          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category?._id}
                className="flex justify-between items-center mb-5 border-b pb-2 "
              >
                <span>{category?.name}</span>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() =>
                      handleEditCategory({
                        name: category?.name,
                        id: category?._id,
                      })
                    }
                  >
                    Edit
                  </button>
                  {isDeleting && category?._id ? (
                    <button
                      disabled
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Deleting ...
                    </button>
                  ) : (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleDeleteCategory(category?._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
