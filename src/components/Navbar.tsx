import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full bg-[#16411D] justify-between items-center p-4 gap-x-8 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-x-2 mx-8">
        <img src="/logo.png" alt="logo" className="w-16 h-16" />
        <h1 className="text-xm font-semibold">
          <span className="text-[#B5CF48]">Nature's </span>Nursery
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center  gap-x-6 mr-8">
        {/* Menu List */}
        <ul className="flex gap-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Cart & Login Section */}
        <div className="flex items-center gap-x-4">
          <img src="/cart.png" alt="cart" className="w-8 h-8" />
          <button className="bg-[#81A140] rounded-sm text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
