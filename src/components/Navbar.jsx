import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/blueHubLogoT.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo & Brand Name */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            </Link>
            <Link to="/" className="text-xl tracking-tight font-bold">
              Bluehub Industries
            </Link>
          </div>
          {/* Navigation Links for Large Screens */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="hover:text-orange-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Authentication Buttons for Large Screens */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/login"
              className="py-2 px-3 border rounded-md text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:from-orange-600 hover:to-orange-900"
            >
              Create an account
            </Link>
          </div>
          {/* Mobile Hamburger Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-2xl">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} className="text-white text-lg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="/login"
                className="py-2 px-3 border rounded-md text-white hover:bg-gray-700"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:from-orange-600 hover:to-orange-900"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
