import React from "react";
import axios from "axios";
import { ipAddress } from "../../constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import VerticalProductCard from "./VerticalProductCard";
const VerticalProductList = ({ category, heading }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const scrollElement = React.useRef();
  const loadingList = new Array(13).fill(null);

  const getCategoryWiseProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${ipAddress}/api/v1/products/category/${category}`
      );
      if (data.status === "SUCCESS") {
        setLoading(false);
        setError(null);
        setData(data.data);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else if (error.request) {
        setError(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  React.useEffect(() => {
    getCategoryWiseProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
        {loading ? (
          loadingList.map((product, index) => (
            <div className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow ">
              <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
              <div className="p-4 grid gap-3">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                <div className="flex gap-3">
                  <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                  <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                </div>
                <button className="text-sm  text-white px-3  rounded-full bg-slate-200  py-2 animate-pulse"></button>
              </div>
            </div>
          ))
        ) : error ? (
          <></>
        ) : (
          data &&
          data.map((product) => (
            <VerticalProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              images={product.images}
              category={product.category}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default VerticalProductList;
