import React from "react";
import { Link } from "react-router-dom";

const ProductCategory = ({ image, label, value }) => {
  return (
    <Link to={`/product-category/${value}`} className="cursor-pointer">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
        <img
          src={image}
          alt={`${label} product category`}
          className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
        />
      </div>
      <p className="text-center text-sm md:text-base capitalize">{label}</p>
    </Link>
  );
};

export default ProductCategory;
