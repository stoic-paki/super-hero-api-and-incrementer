import React from "react";
import "../../index.css";

const SuperCards = ({ name, url, full_name, POB, FA }) => {
  return (
    <>
      <div className="p-3 flex flex-col h-[fit] w-[300px] border-2 rounded-2xl py-3">
        <img crossOrigin="anonymous" src={url} alt="" />
        <h1>{name}</h1>
        <ul className="flex flex-col justify-start items-start">
          <li><span className="font-bold text-gray-900">Full Name:</span> <br /> {full_name}</li>
          <li><span className="font-bold text-gray-900">Place of birth:</span> <br /> {POB}</li>
          <li><span className="font-bold text-gray-900">First Appearance:</span> <br /> {FA}</li>
        </ul>
      </div>
    </>
  );
};

export default SuperCards;
