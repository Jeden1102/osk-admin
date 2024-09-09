"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IoHomeOutline,
  IoCalendarOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { cn } from "@/lib/utils";

const menu = [
  {
    icon: <IoHomeOutline />,
    label: "Home",
    route: "/",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <IoCalendarOutline />,
    label: "Calendar",
    route: "/calendar",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <IoAddCircleOutline />,
    label: "Book",
    route: "/book",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <LuUser />,
    label: "Profile",
    route: "/profile",
    roles: ["admin", "instructor", "student"],
  },
];

const BottomNav = () => {
  const pathName = usePathname();
  return (
    <nav className="h-full w-full md:hidden">
      <div className="fixed bottom-0 left-0 z-50 w-full rounded-t-2xl border border-stroke bg-white/60 shadow-default backdrop-blur">
        <div className="flex">
          {menu.map((menuItem) => (
            <div className="group flex-1">
              <Link
                href={menuItem.route}
                className={cn(
                  "text-gray-400 text-primary/80 mx-auto flex w-full items-end  justify-center pt-2 text-center group-hover:text-secondary",
                  {
                    "bg-secondary/5 text-secondary":
                      pathName === menuItem.route,
                  },
                )}
              >
                <span className="flex flex-col items-center px-1 pb-1 pt-1">
                  <span className="text-xl">{menuItem.icon}</span>
                  <span className="block pb-2">{menuItem.label}</span>
                  <span
                    className={cn(
                      "mx-auto block h-1 w-5 rounded-full group-hover:bg-secondary",
                      { "bg-secondary": pathName === menuItem.route },
                    )}
                  ></span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
