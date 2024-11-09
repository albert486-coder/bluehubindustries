import React from "react";
import axios from "axios";
import { ipAddress } from "../../constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import HorizontalProductCard from "./HorizontalProductCard";

const HorizontalProductsList = ({ category, heading }) => {
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
        className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all"
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
          loadingList.map((product, index) => {
            return (
              <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex">
                <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse"></div>
                <div className="p-4 grid w-full gap-2">
                  <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full"></h2>
                  <p className="capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full"></p>
                  <div className="flex gap-3 w-full">
                    <p className="text-blue-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                    <p className="text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                  </div>
                  <button className="text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse"></button>
                </div>
              </div>
            );
          })
        ) : error ? (
          <></>
        ) : (
          data &&
          data.map((product) => (
            <HorizontalProductCard
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

export default HorizontalProductsList;
