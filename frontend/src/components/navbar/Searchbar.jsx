import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeSearchTerm,
  searchTermUpdated,
} from "../../features/filter/filterSlice";
import useDebounce from "../../utils/debounce";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchTermUpdated(debouncedQuery));
      navigate(`/shop?search=${debouncedQuery}`);
    } else {
      dispatch(removeSearchTerm());
      if (location.pathname === "/shop") {
        navigate("/shop");
      }
    }
  }, [debouncedQuery, navigate, dispatch]);
  return (
    <div className="flex items-center w-full max-w-lg mx-auto mr-5">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none "
      />
      <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-all duration-300">
        <CiSearch className="w-5 h-5" style={{ transform: "scale(1.2)" }} />
      </button>
    </div>
  );
};

export default SearchBar;
