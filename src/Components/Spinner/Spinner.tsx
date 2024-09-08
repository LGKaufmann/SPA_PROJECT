import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-8 w-8 sm:h-12 sm:w-12 border-4 border-dashed rounded-full animate-spin-slow border-blue-600"></div>
    </div>
  );
};
