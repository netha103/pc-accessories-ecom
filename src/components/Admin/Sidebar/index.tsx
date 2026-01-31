"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import {
    LayoutDashboard,
    Settings,
    User,
    ShoppingBag,
    ChevronDown,
    Menu,
    X,
    Package,
    ShoppingCart,
    Users
} from "lucide-react";

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
    const pathname = usePathname();
    const { isExpanded, isMobileOpen, toggleMobileSidebar, isHovered, setIsHovered } = useSidebar();
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    // Close sidebar on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !isMobileOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            toggleMobileSidebar();
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [isMobileOpen, toggleMobileSidebar]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-50 flex h-screen flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-gray-900 lg:static lg:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
                } ${(isExpanded || isHovered) ? "w-72" : "w-20"
                } border-r border-gray-200 dark:border-gray-800`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link href="/admin" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <LayoutDashboard size={24} />
                    </div>
                    {(isExpanded || isHovered) && (
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            TailAdmin
                        </span>
                    )}
                </Link>
                <button
                    ref={trigger}
                    onClick={toggleMobileSidebar}
                    className="block lg:hidden text-gray-500"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                    <div>
                        <h3 className={`mb-4 ml-4 text-sm font-semibold text-gray-500 ${!isExpanded && !isHovered && "lg:hidden"}`}>
                            MENU
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link
                                    href="/admin"
                                    className={`menu-item group ${pathname === "/admin" || pathname.includes("dashboard")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <LayoutDashboard size={20} className={pathname === "/admin" ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Dashboard</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/ecommerce"
                                    className={`menu-item group ${pathname.includes("ecommerce")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <ShoppingBag size={20} className={pathname.includes("ecommerce") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>E-Commerce</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/products"
                                    className={`menu-item group ${pathname.includes("products")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <Package size={20} className={pathname.includes("products") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Products</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/orders"
                                    className={`menu-item group ${pathname.includes("orders")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <ShoppingCart size={20} className={pathname.includes("orders") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Orders</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/customers"
                                    className={`menu-item group ${pathname.includes("customers")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <Users size={20} className={pathname.includes("customers") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Customers</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/profile"
                                    className={`menu-item group ${pathname.includes("profile")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <User size={20} className={pathname.includes("profile") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Profile</span>}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/admin/settings"
                                    className={`menu-item group ${pathname.includes("settings")
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                        }`}
                                >
                                    <Settings size={20} className={pathname.includes("settings") ? "menu-item-icon-active" : "menu-item-icon"} />
                                    {(isExpanded || isHovered) && <span>Settings</span>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
