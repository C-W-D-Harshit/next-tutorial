"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    label: "Dashboard",
    link: "/",
    icon: <LayoutDashboardIcon />,
  },
  {
    label: "Shop",
    link: "/shop",
    icon: <StoreIcon />,
  },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <div className="h-screen py-8">
      <h2 className="mb-8">Untitled</h2>
      <div className="w-full">
        {menuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={cn(
              "w-full relative flex justify-center items-center my-6 h-16 ",
              {
                "bg-green-950": path === item.link,
              }
            )}
          >
            <div className="flex items-center gap-3 w-[70%] h-full">
              {item.icon}
              <p>{item.label}</p>
            </div>
            <div
              className={cn(
                "absolute top-0 left-0 w-0 h-full rounded-sm bg-green-300",
                {
                  "w-1": path === item.link,
                }
              )}
            />
          </Link>
        ))}
      </div>
      {/* logoutBtn */}
    </div>
  );
}
