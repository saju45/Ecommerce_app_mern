const Sidebar = () => {
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <select className="w-full p-2 border rounded">
          <option>All Categories</option>
          <option>Baby Cradles</option>
          <option>Baby Beds</option>
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

      {/* Service & Promotion Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Service & Promotion</h3>
        {["Mall", "Free Delivery", "Coins"].map((service) => (
          <label key={service} className="flex items-center mb-1">
            <input type="checkbox" className="mr-2" />
            {service}
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
        <button className="text-blue-500 mt-2">View More</button>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="text"
          placeholder="Min"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Max"
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default Sidebar;
