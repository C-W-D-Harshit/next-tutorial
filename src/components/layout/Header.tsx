import { MenuIcon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
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
      <button className="px-6 p-4 lg:hidden border-slate-950 bg-blue-500 text-white font-medium h-10 flex items-center justify-center rounded-lg">
        <MenuIcon />
      </button>
    </header>
  );
}
