import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-6 w-6 sm:h-12 sm:w-12 border-4 border-dashed rounded-full animate-spin-slow border-[#cb0c4f]"></div>
    </div>
  );
};
