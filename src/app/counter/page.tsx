"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  // set defaults
  const [value, setValue] = useState(0);

  // a function to add
  function add() {
    if (value < 10) {
      const a = value + 1;
      setValue(a);
    } else {
      alert("Value must be less than or equal to 10");
    }
  }

  // a function to substract
  const substract = () => {
    if (value > 0) {
      const a = value - 1;
      setValue(a);
    } else {
      // console.log("Value must be greater than 0");
      //   console.warn("Value must be greater than 0");
      console.error("Value must be greater than 0");
      alert("Value must be greater than 0");
    }
  };
  return (
    <div className="h-56 w-full flex justify-center items-center gap-5">
      <button
        onClick={add}
        className="border rounded-md p-4 px-6 bg-slate-700 text-white drop-shadow-2xl"
      >
        <PlusIcon />
      </button>
      <div className="w-24 h-24 flex justify-center items-center bg-blue-500 rounded-full text-white font-semibold">
        <p>{value}</p>
      </div>
      <button
        onClick={substract}
        className="border rounded-md p-4 px-6 bg-slate-700 text-white drop-shadow-2xl"
      >
        <MinusIcon />
      </button>
    </div>
  );
}
