import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden h-[17rem] w-[14rem] mx-3 border">
      <img
        className="object-cover object-top w-[66.6%] h-[66.6%]"
        src={product.imageUrl}
        alt=""
      />

      <div className="p-4 h-[98%] w-full">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
