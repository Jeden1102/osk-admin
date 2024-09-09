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
    route: "/",
    roles: ["admin", "instructor", "student"],
  },
  {
    icon: <IoAddCircleOutline />,
    label: "Book",
    route: "/",
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
  return (
    <nav className="h-full w-full md:hidden">
      <div className="fixed bottom-0 left-0 z-50 w-full rounded-t-2xl border border-stroke bg-white/60 px-7 shadow-default backdrop-blur">
        <div className="flex">
          {menu.map((menuItem) => (
            <div className="group flex-1">
              <Link
                href={menuItem.route}
                className="text-gray-400 text-primary/80 mx-auto flex w-full items-end  justify-center px-4 pt-2 text-center group-hover:text-secondary"
              >
                <span className="flex flex-col items-center px-1 pb-1 pt-1">
                  <span className="text-xl">{menuItem.icon}</span>
                  <span className="block pb-2">{menuItem.label}</span>
                  <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-secondary"></span>
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
