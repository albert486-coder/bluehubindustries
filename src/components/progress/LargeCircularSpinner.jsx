import React from "react";

const LargeCircularSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
    </div>
  );
};

export default LargeCircularSpinner;
