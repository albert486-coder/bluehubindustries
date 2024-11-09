import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../redux/actions/categoryActions";
import ProductCategory from "./ProductCategory";

const ProductCategoryList = () => {
  const dispatch = useDispatch();
  const {
    loadingProductCategories,
    errorLoadingProductCategories,
    productCategories,
  } = useSelector((state) => state.category);

  const categoryLoading = new Array(13).fill(null);

  React.useEffect(() => {
    dispatch(getProductCategories());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
        {loadingProductCategories ? (
          categoryLoading.map((el, index) => (
            <div
              className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
              key={"categoryLoading" + index}
            ></div>
          ))
        ) : errorLoadingProductCategories ? (
          <></>
        ) : (
          productCategories &&
          productCategories.map((category) => (
            <ProductCategory
              key={category._id}
              image={category.image}
              label={category.label}
              value={category.value}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCategoryList;
