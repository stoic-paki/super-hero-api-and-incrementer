import React, { useState } from "react";
import "../utils.css";

const CustomCounter = () => {
  const [step, setStep] = useState(1);
  const [num, setNum] = useState(1);

  const StepChange = (e) => {
    setStep(Number(e.target.value));
  };

  const NumChange = () => {
    setNum(num + step);
  };

  const NumDecrement = () => {
    // this if statement makes sure the num doesn't go into negatives
    if (num - step < 0) {
      setNum(0);
    } else {
      setNum(num - step);
    }
  };

  return (
    <div className=" w-full mb-4 mt-30">
 
      <div className="wrapper h-fit flex flex-col justify-start w-full items-center">
        {/* main here */}
        <div className=" main w-full h-fit flex flex-col items-center justify-center">
          <h1 className="my-3 text-4xl">current number: <span className="font-bold text-shadow-cyan-500">{num}</span></h1>

          <input
            placeholder="Enter your step here"
            className="w-50 md:w-100 h-10 border-2 px-3 rounded-[1vh] "
            type="number"
            value={step}
            onChange={StepChange}
            name="stepName"
            id="step"
          />
          <div className="my-5 h-50 w-full flex md:flex-row flex-col justify-evenly items-center">
            <button
              className="btn-hover w-30 h-10 border-2 rounded-[2vh] bg-green-500"
              onClick={NumChange}
            >
              Increment
            </button>
            <button
              className=" btn-hover w-30 h-10 border-2 rounded-[2vh] bg-red-500"
              onClick={NumDecrement}
            >
              Decrement
            </button>
            <button
              className="btn-hover w-30 h-10 border-2 rounded-[2vh] bg-gray-600 text-white"
              onClick={() => setNum(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCounter;
