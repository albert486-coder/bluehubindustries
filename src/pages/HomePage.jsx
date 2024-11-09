import React from "react";
import ProductCategoryList from "../components/categories/ProductCategoryList";
import Banner from "../components/Banner";
import HorizontalProductsList from "../components/products/HorizontalProductsList";
import VerticalProductList from "../components/products/VerticalProductList";

const HomePage = () => {
  return (
    <div>
      <ProductCategoryList />
      <Banner />
      <HorizontalProductsList
        category={"clothing"}
        heading={"Branded T-Shirts"}
      />
      <HorizontalProductsList category={"nylon"} heading={"Laundry Bags"} />
      <VerticalProductList category={"wooven"} heading={"3D Non-wooven bags"} />
      <VerticalProductList
        category={"non wooven"}
        heading={"2D Non-wooven bags"}
      />
      <VerticalProductList category={"kraft"} heading={"Kraft bags"} />
    </div>
  );
};

export default HomePage;
