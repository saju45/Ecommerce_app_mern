const Footer = () => {
  return (
    <footer className="">
      {/* Footer Links Section */}
      <div className="mt-10  border-gray-600 pt-10">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Logo and Contact */}
          <div>
            <h4 className="text-2xl font-bold">Cara</h4>
            <ul className="text-sm mt-5 space-y-2">
              <li>Address: Lalbagh kde road, Alamnagar Rangpur</li>
              <li>Phone: 01773334512</li>
              <li>Hours: 10:00 - 18:00, Mon-Sat</li>
            </ul>
            <div className="mt-5">
              <h4 className="font-bold">Follow Us</h4>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-xl hover:text-[#ffbd27]">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-xl hover:text-[#ffbd27]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-xl hover:text-[#ffbd27]">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h4 className="font-bold">About</h4>
            <ul className="text-sm mt-5 space-y-2">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div>
            <h4 className="font-bold">My Account</h4>
            <ul className="text-sm mt-5 space-y-2">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Column 4: Install App */}
          <div>
            <h4 className="font-bold">Install App</h4>
            <p className="text-sm mt-5">From App Store or Google Play</p>
            <div className="flex space-x-3 mt-5">
              <a href="#" className="border border-white p-2 rounded">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8"
                />
              </a>
              <a href="#" className="border border-white p-2 rounded">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Apple_Store.svg"
                  alt="App Store"
                  className="h-8"
                />
              </a>
            </div>
            <p className="text-sm mt-5">Secure Payment Gateways</p>
            <div className="flex space-x-3 mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Mastercard-logo.svg"
                alt="MasterCard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Maestro_logo.svg"
                alt="Maestro"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; 19 Jan 2023 Complete Ecommerce Website
      </div>
    </footer>
  );
};

export default Footer;
