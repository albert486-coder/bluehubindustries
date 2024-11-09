import React from "react";
import { Link } from "react-router-dom";

const HorizontalProductCard = ({ images, name, id, category, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex"
    >
      <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
        <img
          src={images[0]}
          alt={name}
          className="object-scale-down h-full hover:scale-110 transition-all"
        />
      </div>
      <div className="p-4 grid">
        <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
          {name}
        </h2>
        <p className="capitalize text-slate-500">{category}</p>
        <div className="flex gap-3">
          <p className="text-blue-600 font-medium">{price}</p>
          <p className="text-slate-500 line-through">sdfghjkl</p>
        </div>
        <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 rounded-full">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default HorizontalProductCard;
