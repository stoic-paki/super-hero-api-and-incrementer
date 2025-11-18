import React from "react";
import SuperInput from "./SuperHero-input/SuperInput";

const SuperHero = () => {
  return (
    <div className="w-full h-fit">
      <div className="wrapper w-full h-fit p-2 flex flex-col justify-top items-center gap-10">
        <div className="text-3xl w-full flex flex-col justify-start gap-10 items-center">
          <h1>Enter the name of your SuperHero!</h1>
          <SuperInput/>
        </div>
      </div>
    </div>
  );
};

export default SuperHero;
