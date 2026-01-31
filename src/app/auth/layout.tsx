import React from "react";
import { Outfit } from "next/font/google";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ReduxProvider } from "@/redux/provider";
import { CartModalProvider } from "@/app/context/CartSidebarModalContext";

const outfit = Outfit({ subsets: ["latin"] });

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <ReduxProvider>
                    <CartModalProvider>
                        <Header />
                        <div className="dark:bg-boxdark-2 dark:text-bodydark">
                            {children}
                        </div>
                        <Footer />
                    </CartModalProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
