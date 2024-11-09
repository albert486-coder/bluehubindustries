import React from "react";
import { Link } from "react-router-dom";

const VerticalProductCard = ({ images, name, id, category, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow "
    >
      <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
        <img
          src={images[0]}
          alt={name}
          className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
        />
      </div>
      <div className="p-4 grid gap-3">
        <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
          {name}
        </h2>
        <p className="capitalize text-slate-500">{category}</p>
        <div className="flex gap-3">
          <p className="text-blue-600 font-medium">{price}</p>
          <p className="text-slate-500 line-through">dfghjkl;</p>
        </div>
        <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 rounded-full">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default VerticalProductCard;
