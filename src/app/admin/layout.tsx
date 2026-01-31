"use client";
import React, { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthContext from "@/context/AuthContext";
import Sidebar from "@/components/Admin/Sidebar";
import Header from "@/components/Admin/Header";
import "./admin.css";

const outfit = Outfit({ subsets: ["latin"] });

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <ThemeProvider>
                    <AuthContext>
                        <SidebarProvider>
                            <div className="flex h-screen overflow-hidden dark:bg-gray-900 dark:text-gray-300">
                                <Sidebar />

                                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                                    <Header />
                                    <main>
                                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                            {children}
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </SidebarProvider>
                    </AuthContext>
                </ThemeProvider>
            </body>
        </html>
    );
}
