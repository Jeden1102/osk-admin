"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { PiStudentFill } from "react-icons/pi";
import {
  FaChalkboardTeacher,
  FaCar,
  FaMotorcycle,
  FaTractor,
  FaDashcube,
  FaRegCalendar,
  FaRegUser,
  FaSignInAlt,
} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = {
  admin: [
    {
      name: "USERS",
      roles: ["admin", "instructor"],
      menuItems: [
        {
          icon: <FaChalkboardTeacher />,
          label: "Instructors",
          route: "#",
          children: [
            { label: "List", route: "/instructors" },
            { label: "Add instructor", route: "/instructors/add" },
          ],
          roles: ["admin"],
        },
        {
          icon: <PiStudentFill />,
          label: "Students",
          route: "#",
          children: [
            { label: "List", route: "/students" },
            { label: "Add instructor", route: "/students/add" },
          ],
          roles: ["admin", "instructor"],
        },
        {
          icon: <RiAdminLine />,
          label: "Admins",
          route: "#",
          children: [
            { label: "List", route: "/admins" },
            { label: "Add instructor", route: "/admins/add" },
          ],
          roles: ["admin"],
        },
      ],
    },
    {
      name: "MENU",
      roles: ["admin", "instructor", "student"],
      menuItems: [
        {
          icon: <FaDashcube />,
          label: "Dashboard",
          route: "#",
          children: [
            { label: "Analytics", route: "/", roles: ["admin"] },
            { label: "Home", route: "/", roles: ["instructor", "student"] },
          ],
        },
        {
          icon: <FaRegCalendar />,
          label: "Calendar",
          route: "#",
          children: [
            {
              label: "Instructors",
              route: "/calendar/instructors",
              roles: ["admin"],
            },
            {
              label: "Students",
              route: "/calendar/students",
              roles: ["admin"],
            },
            {
              label: "My calendar",
              route: "/calendar/me",
              roles: ["instructor", "student"],
            },
          ],
        },
      ],
    },
    {
      name: "FLEET",
      roles: ["admin"],
      menuItems: [
        {
          icon: <FaCar />,
          label: "Cars",
          route: "#",
          children: [
            { label: "List", route: "/cars" },
            { label: "Add a car", route: "/cars/add" },
          ],
        },
        {
          icon: <FaMotorcycle />,
          label: "Bikes",
          route: "#",
          children: [
            { label: "List", route: "/bikes" },
            { label: "Add a bike", route: "/bikes/add" },
          ],
        },
        {
          icon: <FaTractor />,
          label: "Others",
          route: "#",
          children: [
            { label: "List", route: "/other-vehicles" },
            { label: "Add a vehicle", route: "/other-vehicles/add" },
          ],
        },
      ],
    },
    {
      name: "OTHERS",
      roles: ["admin", "instructor", "student"],
      menuItems: [
        {
          icon: <FaRegUser />,
          label: "Profile",
          route: "/profile",
        },

        {
          icon: <IoIosSettings />,
          label: "Settings",
          route: "/settings",
        },
        {
          icon: <FaSignInAlt />,
          label: "Authentication",
          route: "#",
          children: [
            { label: "Sign In", route: "/auth/signin" },
            { label: "Sign Up", route: "/auth/signup" },
          ],
        },
      ],
    },
  ],
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <FaArrowLeftLong className="text-white" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.admin.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
