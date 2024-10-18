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
import { useCookies } from "next-client-cookies";

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
  const cookies = useCookies();
  const pathName = usePathname();

  const menuTabs = menu.map((item) => item.route);

  const [activeHistory, setActiveHistory] = useState<number[]>([]);

  const [activeTab, setActiveTab] = useState<number>(() => {
    const activeTabValue = cookies.get("active-tab");
    return parseInt(activeTabValue ?? "0", 10);
  });

  useEffect(() => {
    cookies.set("active-tab", menuTabs.indexOf(pathName).toString());
    setActiveTab(menuTabs.indexOf(pathName));
  }, []);

  useEffect(() => {
    setActiveHistory([...activeHistory, activeTab]);
    console.log(activeHistory);
  }, [activeTab]);
  return (
    <nav className="h-full w-full md:hidden">
      <div className="fixed bottom-0 left-0 z-50 w-full rounded-t-2xl border border-stroke bg-white/60 shadow-default backdrop-blur dark:border-graydark dark:bg-black">
        <div className="relative flex">
          {menu.map((menuItem) => (
            <div key={menuItem.label} className="group flex-1">
              <Link
                href={menuItem.route}
                className={cn(
                  "text-gray-400 mx-auto flex w-full items-end justify-center  pt-2 text-center text-primary/90 group-hover:text-secondary dark:text-secondary/90",
                  {
                    "bg-secondary/5 text-secondary":
                      pathName === menuItem.route,
                  },
                )}
              >
                <span className="flex flex-col items-center px-1 pb-1 pt-1">
                  <span className="text-xl">{menuItem.icon}</span>
                  <span className="block pb-2 dark:font-bold">
                    {menuItem.label}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>

        <span
          style={{
            left: `${activeTab * 25}vw`,
          }}
          className="absolute left-0 top-0 h-1 w-1/4 bg-secondary transition-all duration-500"
        ></span>
      </div>
    </nav>
  );
};

export default BottomNav;
