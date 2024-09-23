import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#111111] opacity-100 shadow-lg font-inter">
        <div className="text-2xl font-bold flex justify-center items-center gap-2 font-dancing text-white">
          <Link to={"/"}>
            <img src="assets/white_logo.png" alt="" height={45} width={45} />
          </Link>
          <h1 className="hidden md:block">Learning Utsav</h1>
        </div>

        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Register Button */}
          <button className="bg-white text-red-600 font-semibold hover:bg-opacity-90 transition duration-300 py-2 px-4 rounded-md">
            <Link to={"/register"}>Register</Link>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-gray-200 md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/*Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-2xl text-gray-700 hover:text-gray-900"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
