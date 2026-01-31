"use client";

import React from "react";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, Sun, Moon, Search } from "lucide-react";
import DropdownUser from "./DropdownUser";
import DropdownNotification from "./DropdownNotification";
import DropdownMessage from "./DropdownMessage";

const Header = () => {
    const { toggleSidebar, toggleMobileSidebar } = useSidebar();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 dark:bg-gray-900 dark:drop-shadow-none border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* Hamburger Toggle BTN */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleMobileSidebar();
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    <Link className="block flex-shrink-0 lg:hidden" href="/admin">
                        <div className="h-8 w-8 bg-indigo-600 rounded-md"></div>
                    </Link>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleSidebar();
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-sm border border-stroke bg-white shadow-sm dark:border-strokedark dark:bg-boxdark lg:flex"
                    >
                        <Menu size={20} />
                    </button>

                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2">
                                <Search size={20} className="text-gray-500" />
                            </button>
                            <input
                                type="text"
                                placeholder="Type to search..."
                                className="w-full bg-transparent pl-9 pr-4 text-sm font-medium focus:outline-none xl:w-125 dark:text-gray-300"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        {/* Dark Mode Toggler */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray-100 hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </li>

                        {/* Notification Menu Area */}
                        <DropdownNotification />

                        {/* Message Menu Area */}
                        <DropdownMessage />
                    </ul>

                    {/* User Area */}
                    <DropdownUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
