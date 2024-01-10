"use client";

import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const a = 1;
  var c = "bca";

  let b = 2;
  const d = a + b;
  console.log(d);

  b = 3;

  return (
    <>
      <header className="w-full border-b flex justify-between items-center h-16 px-16">
        <p className="text-xl font-bold">Logo</p>
        <div className=" items-center gap-5 hidden lg:flex">
          <p className="font-medium hover:text-blue-500 hover:cursor-pointer transition-all duration-300 text-lg">
            Home
          </p>
          <p className="font-medium hover:text-blue-500 hover:cursor-pointer transition-all duration-300 text-lg">
            Shop
          </p>
          <p className="font-medium hover:text-blue-500 hover:cursor-pointer transition-all duration-300 text-lg">
            Contact
          </p>
          <p className="font-medium hover:text-blue-500 hover:cursor-pointer transition-all duration-300 text-lg">
            About
          </p>
        </div>
        <button className="lg:flex hidden px-6 p-4  border-slate-950 bg-blue-500 text-white font-medium h-10 items-center justify-center rounded-lg">
          Login
        </button>
        <button
          onClick={handleOpenClose}
          className="px-6 p-4 lg:hidden border-slate-950 bg-blue-500 text-white font-medium h-10 flex items-center justify-center rounded-lg"
        >
          <MenuIcon />
        </button>
      </header>
      <div
        className={cn(
          "fixed top-0 -right-full bg-slate-100 h-screen w-[60vw] z-50 drop-shadow-2xl transition-all duration-500",
          {
            "right-0": open,
          }
        )}
      >
        <button
          onClick={handleOpenClose}
          className="px-6 p-4 lg:hidden border-slate-950 bg-blue-500 text-white font-medium h-10 flex items-center justify-center rounded-lg m-5"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
