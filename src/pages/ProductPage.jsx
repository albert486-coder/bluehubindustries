import React from "react";
import { CheckCircle2 } from "lucide-react";
import productImg from "../assets/product.jpg"; // make sure this exists
import { productFeatures } from "../constants"; // an array of product feature objects

const ProductPage = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Discover our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Product
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* Product Image Section */}
        <div className="p-2 w-full lg:w-1/2">
          <img
            src={productImg}
            alt="Our Product"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Product Features Section */}
        <div className="pt-12 w-full lg:w-1/2">
          {productFeatures.map((feature, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex items-center justify-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{feature.title}</h5>
                <p className="text-md text-neutral-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
