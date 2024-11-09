import React from "react";

const SmallCircularSpinner = () => {
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white"></div>
    </div>
  );
};

export default SmallCircularSpinner;
