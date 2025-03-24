import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/blueHubLogoT.png";
import { logoutUser } from "../redux/actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white shadow-md">
      <div className="container px-4 mx-auto relative flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <Link to="/" className="text-xl font-bold">Bluehub Industries</Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-orange-500 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          {userInfo && (
            <div className="relative">
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((prev) => !prev)}
              >
                {userInfo.profilePic ? (
                  <img
                    src={userInfo.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={userInfo.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
              {menuDisplay && (
                <div className="absolute bg-white top-12 right-0 h-fit p-2 shadow-lg rounded">
                  {userInfo.isAdmin && (
                    <Link
                      to="/admin-panel/dashboard"
                      className="block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => dispatch(logoutUser())}
                    className="block w-full text-left px-3 py-1 rounded-md text-white bg-orange-500 hover:bg-orange-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          <Link to="/cart" className="text-2xl relative">
            <FaShoppingCart />
            <div className="bg-orange-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </Link>
          {!userInfo && (
            <Link
              to="/login"
              className="px-3 py-1 rounded-md text-white bg-orange-500 hover:bg-orange-700"
            >
              Login
            </Link>
          )}
          <button onClick={toggleNavbar} className="lg:hidden text-3xl">
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-white w-full p-6 flex flex-col justify-center items-center lg:hidden">
          <div className="w-full flex items-center border rounded-full focus-within:shadow pl-2 mb-4">
            <input
              type="text"
              placeholder="Search product here..."
              className="w-full outline-none"
            />
            <div className="text-lg min-w-[50px] h-8 bg-orange-500 flex items-center justify-center rounded-r-full text-white">
              <GrSearch />
            </div>
          </div>
          {userInfo && (
            <button
              onClick={() => dispatch(logoutUser())}
              className="w-full text-center px-3 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-700 mb-4"
            >
              Logout
            </button>
          )}
          {!userInfo && (
            <Link
              to="/login"
              className="w-full text-center px-3 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
