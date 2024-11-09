import React from "react";

const MediumCircularSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-9 h-9 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
    </div>
  );
};

export default MediumCircularSpinner;
