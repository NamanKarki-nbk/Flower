import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 flex w-full bg-[#16411D]/85 justify-between items-center px-20 py-4  text-white ">
      {/* Logo Section */}
      <div className="flex items-center gap-x-2 ">
        <img src="/logo.png" alt="logo" className="w-16 h-16" />
        <h1 className="text-xm font-semibold">
          <span className="text-[#B5CF48]">Nature's </span>Nursery
        </h1>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center gap-x-10  ">
        {/* Menu List */}
        <ul className="flex gap-x-10 text-lg">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Cart & Login Section */}

        <img
          src="/Vector.png"
          alt="cart"
          className="w-4 h-5 ml-6 hover:opacity-20 focus:opacity-20 transition"
        />
        <button className="bg-[#81A140] rounded-md text-white px-5 py-2 hover:bg-[#B5CF48]">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
