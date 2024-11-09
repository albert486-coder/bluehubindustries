import React from "react";
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
  const [menuDisplay, setMenuDisplay] = React.useState(false);

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="flex flex-row items-center">
          <div>
            <img src={logo} width={"80px"} height={"80px"} alt="logo" />
          </div>
          <div>
            <Link to={"/"}>
              <h3 className="text-lg font-bold">Bluehub Industries</h3>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            {userInfo && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((preve) => !preve)}
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
            )}
            {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                {userInfo.isAdmin && (
                  <Link
                    to={"/admin-panel/dashboard"}
                    className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                    onClick={() => setMenuDisplay((preve) => !preve)}
                  >
                    Admin Panel
                  </Link>
                )}
              </div>
            )}
          </div>
          {userInfo && (
            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </Link>
          )}
          <div>
            {userInfo ? (
              <button
                onClick={() => dispatch(logoutUser())}
                className="flex-row items-center px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
