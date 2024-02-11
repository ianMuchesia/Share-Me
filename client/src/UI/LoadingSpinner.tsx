import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="relative w-10 h-10">
      <div className="absolute border-t-2 border-[#bd255f] rounded-full animate-spin w-6 h-6 top-2 left-2"></div>
    </div>
  );
};

export default LoadingSpinner;
